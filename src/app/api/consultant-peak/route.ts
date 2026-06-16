import { type NextRequest, NextResponse } from "next/server";

import { isSanityConfigured } from "@/sanity/env";
import { writeClient } from "@/sanity/serverClient";

export const dynamic = "force-dynamic";

/**
 * kwin deployment'larının aylık lisans kullanım (peak aktif danışman) ölçümünü aldığı uç.
 * kwin → POST https://poyrazinan.com.tr/api/consultant-peak
 *   header: X-Report-Secret: <CONSULTANT_PEAK_SECRET ile aynı>
 *   body:   { customerKey, year, month, peak, computedAtUtc }
 * Deterministik _id ile Sanity'ye upsert eder; yalnız yeni/değişen veride Telegram mesajı atar.
 */
type Body = {
  customerKey?: string;
  year?: number;
  month?: number;
  peak?: number;
  computedAtUtc?: string;
};

export async function POST(req: NextRequest) {
  // 1) Shared secret doğrula
  const secret = process.env.CONSULTANT_PEAK_SECRET;
  const provided = req.headers.get("x-report-secret");
  if (!secret || provided !== secret) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // 2) Body parse + doğrulama
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { customerKey, year, month, peak } = body;
  if (
    typeof customerKey !== "string" ||
    customerKey.trim() === "" ||
    typeof year !== "number" ||
    typeof month !== "number" ||
    typeof peak !== "number" ||
    month < 1 ||
    month > 12
  ) {
    return NextResponse.json({ error: "missing/invalid fields" }, { status: 400 });
  }

  if (!isSanityConfigured || !process.env.SANITY_API_WRITE_TOKEN) {
    console.error("[consultant-peak] Sanity yapılandırılmamış / write token yok");
    return NextResponse.json({ error: "sanity not configured" }, { status: 503 });
  }

  const cleanKey = customerKey.trim();

  // 3) Deterministik _id → (müşteri, dönem) başına tek kayıt (upsert/dedup)
  const safeKey = cleanKey.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const _id = `consultantPeak.${safeKey}.${year}-${String(month).padStart(2, "0")}`;

  const computedAtUtc = (() => {
    if (!body.computedAtUtc) return new Date().toISOString();
    const d = new Date(body.computedAtUtc);
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  })();

  let isNew = false;
  try {
    // Yazmadan önce mevcut peak'i kontrol et → Telegram'ı yalnız yeni/değişen veride at.
    const existing = await writeClient.fetch<{ peak?: number } | null>(
      `*[_id == $id][0]{ peak }`,
      { id: _id }
    );
    isNew = !existing || existing.peak !== peak;

    await writeClient.createOrReplace({
      _id,
      _type: "consultantPeak",
      customerKey: cleanKey,
      year,
      month,
      peak,
      computedAtUtc,
      receivedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[consultant-peak] Sanity yazma hatası", err);
    return NextResponse.json({ error: "write failed" }, { status: 500 });
  }

  // 4) Telegram — best-effort, Sanity yazımını bozmaz; yalnız yeni/değişen veride.
  let telegramSent = false;
  if (isNew) {
    telegramSent = await sendTelegram(cleanKey, year, month, peak);
  }

  return NextResponse.json({ ok: true, id: _id, customerKey: cleanKey, year, month, peak, isNew, telegramSent });
}

async function sendTelegram(
  customerKey: string,
  year: number,
  month: number,
  peak: number
): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.warn("[consultant-peak] TELEGRAM_BOT_TOKEN/CHAT_ID yok — mesaj atlanmadı.");
    return false;
  }

  const text =
    `📊 Lisans Kullanımı\n` +
    `Müşteri: ${customerKey}\n` +
    `Dönem: ${year}-${String(month).padStart(2, "0")}\n` +
    `Peak aktif danışman: ${peak}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!res.ok) {
      console.error("[consultant-peak] Telegram başarısız", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[consultant-peak] Telegram hatası", err);
    return false;
  }
}
