/**
 * Sanity'deki `project` dökümanlarının star sayılarını GitHub API'sinden
 * çekip günceller. Bağımlılık yok — Node 18+ yerleşik fetch kullanır.
 *
 * Gerekli env:
 *   SANITY_API_WRITE_TOKEN  (zorunlu — Editor/Write yetkili token)
 *   SANITY_PROJECT_ID       (varsayılan: ckxe60qx)
 *   SANITY_DATASET          (varsayılan: production)
 *   GITHUB_TOKEN            (opsiyonel — rate limit'i yükseltir; Actions otomatik sağlar)
 */

const projectId = process.env.SANITY_PROJECT_ID || "ckxe60qx";
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;
const ghToken = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("✖ SANITY_API_WRITE_TOKEN tanımlı değil.");
  process.exit(1);
}

const base = `https://${projectId}.api.sanity.io/v${apiVersion}/data`;
const authHeaders = { Authorization: `Bearer ${token}` };

// 1) Sanity'den repo'su tanımlı projeleri al
const query = `*[_type == "project" && defined(repo)]{_id, name, repo, stars}`;
const queryRes = await fetch(
  `${base}/query/${dataset}?query=${encodeURIComponent(query)}`,
  { headers: authHeaders }
);
if (!queryRes.ok) {
  console.error("✖ Sanity sorgusu başarısız:", queryRes.status, await queryRes.text());
  process.exit(1);
}
const { result: projects = [] } = await queryRes.json();

if (projects.length === 0) {
  console.log("ℹ Repo'su tanımlı proje bulunamadı — güncellenecek bir şey yok.");
  process.exit(0);
}

// 2) Her proje için GitHub'dan güncel star sayısını çek
const mutations = [];
for (const p of projects) {
  const ghRes = await fetch(`https://api.github.com/repos/${p.repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfoy-star-updater",
      ...(ghToken ? { Authorization: `Bearer ${ghToken}` } : {}),
    },
  });
  if (!ghRes.ok) {
    console.warn(`⚠ ${p.repo}: GitHub isteği başarısız (${ghRes.status}) — atlanıyor.`);
    continue;
  }
  const repo = await ghRes.json();
  const stars = repo.stargazers_count;
  if (typeof stars !== "number") {
    console.warn(`⚠ ${p.repo}: star sayısı okunamadı — atlanıyor.`);
    continue;
  }
  if (stars !== p.stars) {
    mutations.push({ patch: { id: p._id, set: { stars } } });
    console.log(`↑ ${p.repo}: ${p.stars ?? 0} → ${stars}`);
  } else {
    console.log(`= ${p.repo}: ${stars} (değişmedi)`);
  }
}

// 3) Değişenleri Sanity'ye yaz
if (mutations.length === 0) {
  console.log("✓ Tüm star sayıları güncel.");
  process.exit(0);
}

const mutateRes = await fetch(`${base}/mutate/${dataset}`, {
  method: "POST",
  headers: { "Content-Type": "application/json", ...authHeaders },
  body: JSON.stringify({ mutations }),
});
if (!mutateRes.ok) {
  console.error("✖ Sanity güncellemesi başarısız:", mutateRes.status, await mutateRes.text());
  process.exit(1);
}

console.log(`✓ ${mutations.length} proje güncellendi.`);
