import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("İçerik")
    .items([
      S.listItem()
        .title("Site ayarları")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.documentTypeListItem("skillCategory").title("Yetenek kategorileri"),
      S.documentTypeListItem("experience").title("Deneyim"),
      S.documentTypeListItem("education").title("Eğitim"),
      S.documentTypeListItem("project").title("Projeler"),
      S.divider(),
      S.documentTypeListItem("consultantPeak").title("Lisans Kullanımı"),
    ]);
