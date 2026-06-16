# Poyraz İnan — Portfolio

Kişisel portföy / CV sitesi. Çift dilli (TR/EN), koyu temalı, içerik yönetimi CMS üzerinden yapılan tek sayfalık bir site.

🔗 **[poyrazinan.com.tr](https://poyrazinan.com.tr)**

![Next.js](https://img.shields.io/badge/Next.js-15-000) ![React](https://img.shields.io/badge/React-19-149eca) ![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

---

## Özellikler

- **Çift dilli (TR/EN)** — sayfa yenilenmeden anlık dil geçişi, tercih `localStorage`'da saklanır.
- **CMS üzerinden içerik** — hero, hakkımda, yetenekler, deneyim, eğitim, projeler, iletişim ve CV PDF'leri Sanity'den yönetilir.
- **CMS'siz de çalışır** — Sanity bağlı/dolu değilse `src/lib/defaults.ts` içindeki içerik gösterilir; CMS verisi geldikçe üzerine biner.
- **Gömülü Sanity Studio** — `/studio` adresinde, ayrı bir kurulum gerektirmeden.
- **Gömülü CV önizleme** — TR/EN PDF sekmeleri, yeni sekmede açma ve indirme.
- **Scroll-reveal animasyonları**, `prefers-reduced-motion` desteği ve duyarlı (responsive) tasarım.
- **ISR + webhook** ile içerik yayınlandığında otomatik tazeleme.

## Teknoloji yığını

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Dil | TypeScript |
| İçerik (CMS) | Sanity v3 (gömülü Studio) |
| Stil | CSS değişkenleriyle saf CSS |
| Fontlar | Space Grotesk + JetBrains Mono (`next/font`) |
| Dağıtım | Vercel |

## Proje yapısı

```
src/
  app/
    layout.tsx                 fontlar + metadata
    page.tsx                   içeriği çeker, <Portfolio/> render eder
    globals.css                tasarım sistemi (tasarım token'ları)
    studio/[[...tool]]/        gömülü Sanity Studio (/studio)
    api/revalidate/            Sanity webhook hedefi (ISR tazeleme)
  components/                  Nav, Hero, About, Skills, Projects, Cv, Contact ...
  lib/
    types.ts                   tipler + t() dil seçici yardımcı
    defaults.ts                CMS yokken/eksikken kullanılan içerik
    getHomeData.ts             fetch + varsayılanlarla birleştirme
    ui.ts                      sabit arayüz metinleri (nav, butonlar)
  sanity/
    schemaTypes/               içerik şeması
    structure.ts               Studio menüsü (singleton + listeler)
    client.ts · env.ts · image.ts · queries.ts
sanity.config.ts               Studio yapılandırması
```

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000  ·  Studio: /studio
```

Komutlar:

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Üretim derlemesi |
| `npm run start` | Derlenmiş sürümü çalıştırır |
| `npm run typegen` | Sanity şemasından TypeScript tipleri üretir |

## Ortam değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyalayıp doldurun:

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity proje kimliği |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset (genelde `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API tarihi, örn. `2024-10-01` |
| `SANITY_REVALIDATE_SECRET` | (Opsiyonel) revalidate webhook gizli anahtarı |

Public dataset kullanıldığında okuma token'ı gerekmez.

## İçerik yönetimi

İçerik `/studio` üzerinden düzenlenir. Şema bu repoda (`src/sanity/schemaTypes`) tanımlıdır; ayrı bir Studio projesine gerek yoktur.

- **Site ayarları** — hero, hakkımda, bölüm başlıkları, CV açıklaması + PDF'ler, iletişim, footer (tek doküman).
- **Yetenek kategorileri / Deneyim / Eğitim / Projeler** — listeler; sıralama `order` alanıyla.

Her metin alanı **Türkçe** ve **English** olarak ayrı tutulur; site, aktif dile göre doğru olanı gösterir, biri boşsa diğerine düşer.

## Dağıtım

Vercel'e bağlandığında ortam değişkenleri panele eklenir ve her `main` push'unda otomatik dağıtılır. İçeriğin anında tazelenmesi için Sanity'de `/api/revalidate` adresine bir webhook tanımlanabilir (`SANITY_REVALIDATE_SECRET` ile).

---

© Poyraz İnan
