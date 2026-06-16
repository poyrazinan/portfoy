# Poyraz İnan — Portfolio

Çift dilli (TR/EN) kişisel portföy / CV sitesi. **Next.js 15 (App Router)** ile yazıldı, içerikler **Sanity** üzerinden düzenlenir, **Vercel**'de yayınlanır.

- Tasarım `docs/` klasöründeki prototiple birebir (koyu tema, Space Grotesk + JetBrains Mono, yeşil aksan).
- Dil geçişi anlık ve `localStorage`'da saklanır (sayfa yenilenmez).
- Tüm metinler, projeler, deneyim/eğitim, profil fotoğrafı ve CV PDF'leri Sanity'den gelir.
- Sanity bağlanmadan da çalışır: içerik bağlanana kadar `src/lib/defaults.ts` içindeki varsayılan içerik gösterilir.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
```

Sanity henüz bağlı değilken site, prototip içeriğini gösterir. Studio (`/studio`) için önce aşağıdaki Sanity kurulumunu yapmalısın.

## 1) Sanity projesi oluştur

```bash
npx sanity@latest login          # tarayıcıdan giriş yap
npx sanity@latest init --env     # yeni proje oluşturur, .env.local'a ID yazar
```

`init --env` komutu proje ID + dataset'i `.env.local` dosyasına yazar. Elle de yapabilirsin:

```bash
cp .env.local.example .env.local
```

ve doldur:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="xxxxxxx"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-10-01"
```

> Şema bu repo içinde tanımlı (`src/sanity/schemaTypes`). Ayrı bir Sanity Studio projesine gerek yok — Studio bu Next.js uygulamasının içine `/studio` adresinde gömülü.

## 2) İçerikleri düzenle

`npm run dev` çalışırken **http://localhost:3000/studio** adresine git. Soldaki menüde:

- **Site ayarları** — hero, hakkımda, bölüm başlıkları, CV açıklaması + PDF'ler, iletişim, footer. (Tek doküman.)
- **Yetenek kategorileri / Deneyim / Eğitim / Projeler** — liste; sıralama `order` alanıyla.

Her metin alanı **Türkçe** ve **English** olarak ikiye ayrılır. İkisini de doldur; site dil düğmesine göre doğru olanı gösterir. Bir dili boş bırakırsan diğer dile (ya da varsayılan içeriğe) düşer.

**Profil fotoğrafı:** Site ayarları → Profile photo. (Boşsa `public/pp.jpg` kullanılır.)
**CV PDF'leri:** Site ayarları → CV (Turkish/English PDF yükle). (Boşsa `public/cv-tr.pdf` / `public/cv-en.pdf` kullanılır — bunları gerçek CV'lerinle değiştir.)

## 3) Vercel'e deploy

1. Repoyu GitHub'a push et.
2. [vercel.com](https://vercel.com) → **New Project** → bu repoyu seç.
3. **Environment Variables** bölümüne `.env.local`'daki değişkenleri ekle:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - (opsiyonel) `SANITY_REVALIDATE_SECRET`
4. **Deploy.** Studio yayında: `https://<alan-adın>/studio`.

### Sanity'de izin verilen origin

Studio'nun yayındaki domainden çalışması için Sanity yönetiminde origin ekle:
[sanity.io/manage](https://www.sanity.io/manage) → proje → **API → CORS origins** → `https://<alan-adın>` (credentials açık).

### Anında güncelleme (opsiyonel)

İçerik yayınlandığında site otomatik tazelenir (varsayılan 60 sn ISR). Anında yapmak için:

1. Vercel'de `SANITY_REVALIDATE_SECRET` ekle (rastgele bir değer).
2. Sanity → **API → Webhooks → Create webhook**:
   - URL: `https://<alan-adın>/api/revalidate`
   - Dataset: `production`, Trigger: create/update/delete
   - Secret: yukarıdaki değerle aynı

## Proje yapısı

```
src/
  app/
    layout.tsx                 fontlar + metadata
    page.tsx                   Sanity'den veri çeker, <Portfolio/> render eder
    globals.css                tüm tasarım (prototipten birebir)
    studio/[[...tool]]/         gömülü Sanity Studio (/studio)
    api/revalidate/             Sanity webhook hedefi
  components/                   Nav, Hero, About, Skills, ... bölümler
  lib/
    types.ts                   tipler + t() dil seçici
    defaults.ts                Sanity yokken/eksikken kullanılan içerik
    getHomeData.ts             fetch + varsayılanlarla birleştirme
    ui.ts                      sabit arayüz metinleri (nav, butonlar)
  sanity/
    schemaTypes/               içerik şeması
    structure.ts               Studio menüsü (singleton + listeler)
    client.ts, env.ts, image.ts, queries.ts
sanity.config.ts               Studio yapılandırması
docs/                          orijinal HTML prototip (referans)
```

## Notlar

- `docs/` klasörü orijinal tasarım referansıdır; canlı site onu kullanmaz, silebilirsin.
- Proje yıldız sayıları Sanity'de elle girilir. İstersen GitHub API'sinden canlı çekecek şekilde genişletilebilir.
