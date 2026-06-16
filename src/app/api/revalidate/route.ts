import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity webhook target. In Sanity → API → Webhooks, point a webhook at
 * https://<your-domain>/api/revalidate, set the same secret as
 * SANITY_REVALIDATE_SECRET, and content republishes instantly.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    revalidateTag("home");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("[revalidate]", err);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}
