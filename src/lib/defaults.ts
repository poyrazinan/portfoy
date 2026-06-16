import type { HomeData } from "./types";

const ls = (tr: string, en: string) => ({ tr, en });

/**
 * Content sourced from Poyraz İnan's CV (docs/Poyraz_Inan_CV_*.html).
 * Used as a fallback before Sanity is connected, and merged under live
 * Sanity data so any field the editor hasn't filled still has a sensible value.
 */
export const defaultData: HomeData = {
  settings: {
    profileImage: null,
    hero: {
      badge: ls("Yeni projelere açığım", "Open to new projects"),
      titleLine1: ls("Backend", "Backend"),
      titleLine2: ls("geliştiricisi.", "developer."),
      role: ls(
        "// .NET · Java backend · Finansal uyumluluk & SaaS",
        "// .NET · Java backend · Financial compliance & SaaS"
      ),
      lede: ls(
        "İstanbul'dan .NET / Java backend geliştiricisi. Finansal uyumluluk sistemleri, operasyonel istihbarat süreçleri ve modern SaaS mimarileri üzerine 5+ yıl deneyim.",
        "A .NET / Java backend developer from İstanbul. 5+ years across financial-compliance systems, operational-intelligence workflows and modern SaaS architectures."
      ),
      photoLocation: "İstanbul / Türkiye",
      photoEst: "EST. 2020",
    },
    aboutHeading: {
      label: ls("Hakkımda", "About"),
      title: ls("Kod yazmayı seven biri.", "Someone who loves writing code."),
    },
    aboutParagraphs: [
      ls(
        ".NET ve Java ekosisteminde 5+ yıl deneyimli bir backend geliştiricisiyim. U&G Danışmanlık'ta MASAK kapsamında finansal uyumluluk sistemleri (Fineksus, Uyumbaz, U&G KaraListe), operasyonel istihbarat akışları ve modern SaaS uygulamaları geliştiriyorum.",
        "I'm a backend developer with 5+ years across the .NET and Java ecosystems. At U&G Consulting I build financial-compliance systems (Fineksus, Uyumbaz, U&G Blacklist) within MASAK scope, operational-intelligence workflows and modern SaaS applications."
      ),
      ls(
        "Statik sistemleri veritabanı odaklı, ölçeklenebilir mimarilere dönüştürmeye odaklanıyorum. Daha önce Geik.xyz markası altında 3 yıl boyunca 14+ Java eklentisi ve REST tabanlı lisanslama altyapısı geliştirip 500+ müşteriye ulaştırdım. Temiz mimari ve performans önceliğim.",
        "I focus on turning static systems into database-driven, scalable architectures. Earlier, as founder of Geik.xyz, I shipped 14+ Java plugins and a REST-based licensing platform over 3 years, reaching 500+ customers. Clean architecture and performance are my priorities."
      ),
    ],
    facts: [
      { key: ls("Konum", "Location"), value: ls("İstanbul, Türkiye 🇹🇷", "İstanbul, Türkiye 🇹🇷") },
      {
        key: ls("Rol", "Role"),
        value: ls("Backend Developer (.NET / Java)", "Backend Developer (.NET / Java)"),
      },
      {
        key: ls("Odak", "Focus"),
        value: ls("Finansal uyumluluk · SaaS · Oracle", "Financial compliance · SaaS · Oracle"),
      },
      {
        key: ls("Deneyim", "Experience"),
        value: ls("5+ yıl", "5+ years"),
      },
      {
        key: ls("Diller", "Languages"),
        value: ls("Türkçe (ana dil) · İngilizce", "Turkish (native) · English"),
      },
      {
        key: ls("Web", "Web"),
        value: ls("poyrazinan.com.tr", "poyrazinan.com.tr"),
        url: "https://poyrazinan.com.tr",
      },
    ],
    skillsHeading: {
      label: ls("Yetenekler & Teknolojiler", "Skills & Technologies"),
      title: ls("Birlikte çalıştığım araçlar.", "The tools I work with."),
    },
    experienceHeading: {
      label: ls("Deneyim", "Experience"),
      title: ls("İş geçmişi.", "Work history."),
    },
    educationHeading: {
      label: ls("Eğitim", "Education"),
      title: ls("Eğitim geçmişi.", "Educational background."),
    },
    projectsHeading: {
      label: ls("Öne çıkan projeler", "Featured projects"),
      title: ls("GitHub'dan seçmeler.", "Selected from GitHub."),
    },
    cvHeading: {
      label: ls("Özgeçmiş", "Résumé"),
      title: ls("CV'mi indir.", "Download my CV."),
    },
    cvDescription: ls(
      "Türkçe ve İngilizce özgeçmişimi aşağıdan önizleyebilir veya PDF olarak indirebilirsiniz.",
      "You can preview my Turkish and English résumé below or download it as a PDF."
    ),
    cvFileTrUrl: null,
    cvFileEnUrl: null,
    contactHeading: { label: ls("İletişim", "Contact"), title: null },
    contactLeadStart: ls("Bir projeniz mi var? ", "Got a project? "),
    contactLeadAccent: ls("Konuşalım.", "Let's talk."),
    contactLeadEnd: ls(
      " En hızlı bana e-posta veya LinkedIn üzerinden ulaşabilirsiniz.",
      " The fastest way to reach me is by email or LinkedIn."
    ),
    contactLinks: [
      {
        label: ls("E-posta", "Email"),
        value: "ben@poyrazinan.com.tr",
        href: "mailto:ben@poyrazinan.com.tr",
        external: false,
      },
      {
        label: ls("Telefon", "Phone"),
        value: "+90 555 030 63 77",
        href: "tel:+905550306377",
        external: false,
      },
      {
        label: ls("LinkedIn", "LinkedIn"),
        value: "in/poyrazinan",
        href: "https://linkedin.com/in/poyrazinan",
        external: true,
      },
      {
        label: ls("GitHub", "GitHub"),
        value: "@poyrazinan",
        href: "https://github.com/poyrazinan",
        external: true,
      },
      {
        label: ls("Web sitesi", "Website"),
        value: "poyrazinan.com.tr",
        href: "https://poyrazinan.com.tr",
        external: true,
      },
    ],
    footerRights: ls("Tüm hakları saklıdır.", "All rights reserved."),
    footerMade: ls("tasarım & kod", "design & code"),
  },
  skills: [
    {
      _id: "s1",
      title: ls("Diller", "Languages"),
      items: [
        ls("C# / .NET 9", "C# / .NET 9"),
        ls("Java · Spring", "Java · Spring"),
        ls("JavaScript / TypeScript", "JavaScript / TypeScript"),
        ls("Oracle SQL · Python", "Oracle SQL · Python"),
      ],
    },
    {
      _id: "s2",
      title: ls("Framework & Backend", "Frameworks & Backend"),
      items: [
        ls("ASP.NET Core 9", "ASP.NET Core 9"),
        ls("Entity Framework Core 9", "Entity Framework Core 9"),
        ls("Spring · Hibernate", "Spring · Hibernate"),
        ls("REST · SOAP · SignalR", "REST · SOAP · SignalR"),
      ],
    },
    {
      _id: "s3",
      title: ls("Veritabanı", "Databases"),
      items: [
        ls("Oracle (PL/SQL)", "Oracle (PL/SQL)"),
        ls("PostgreSQL · MySQL", "PostgreSQL · MySQL"),
        ls("Index & sorgu tuning", "Index & query tuning"),
        ls("EF Core Migrations", "EF Core Migrations"),
      ],
    },
    {
      _id: "s4",
      title: ls("Cloud & Sistem", "Cloud & System"),
      items: [
        ls("AWS (EB · RDS · S3)", "AWS (EB · RDS · S3)"),
        ls("Oracle Linux", "Oracle Linux"),
        ls("Windows Services · IIS", "Windows Services · IIS"),
        ls("Multi-threading", "Multi-threading"),
      ],
    },
    {
      _id: "s5",
      title: ls("Entegrasyon & Güvenlik", "Integrations & Security"),
      items: [
        ls("MASAK (Fineksus, Uyumbaz)", "MASAK (Fineksus, Uyumbaz)"),
        ls("JWT · RBAC", "JWT · RBAC"),
        ls("Firebase · Web Push", "Firebase · Web Push"),
        ls("Netgsm · MailKit", "Netgsm · MailKit"),
      ],
    },
    {
      _id: "s6",
      title: ls("DevOps & Araçlar", "DevOps & Tools"),
      items: [
        ls("Self-hosted GitLab", "Self-hosted GitLab"),
        ls("GitLab CI/CD", "GitLab CI/CD"),
        ls("SonarQube", "SonarQube"),
        ls("PuppeteerSharp · GemBox", "PuppeteerSharp · GemBox"),
      ],
    },
  ],
  experience: [
    {
      _id: "e1",
      when: ls("Aralık 2023 — günümüz", "December 2023 — present"),
      role: ls("Yazılım Geliştirici", "Software Developer"),
      org: ls("U&G Yazılım ve Danışmanlık A.Ş.", "U&G Consulting Inc."),
      description: ls(
        "MASAK kapsamında finansal uyumluluk sistemleri (Fineksus, Uyumbaz, U&G KaraListe) ve operasyonel istihbarat akışları geliştiriyorum. 13 Windows servisini izole çekirdeklerde çalıştıran multi-threading altyapısı; ASP.NET Core 9 + EF Core 9 + PostgreSQL ile SaaS uygulamaları; Oracle PL/SQL performans optimizasyonu ve GitLab CI/CD süreçleri.",
        "Building MASAK financial-compliance systems (Fineksus, Uyumbaz, U&G Blacklist) and operational-intelligence workflows. Designed a multi-threaded architecture running 13 Windows services on isolated cores; SaaS apps on ASP.NET Core 9 + EF Core 9 + PostgreSQL; Oracle PL/SQL performance tuning and GitLab CI/CD ownership."
      ),
    },
    {
      _id: "e2",
      when: ls("Haziran 2020 — Haziran 2023", "June 2020 — June 2023"),
      role: ls("Kurucu & Java Geliştirici", "Founder & Java Developer"),
      org: ls("Geik.xyz & GEdition", "Geik.xyz & GEdition"),
      description: ls(
        "Minecraft ekosistemi için 14+ özel Java/Spigot eklentisi ve REST tabanlı lisans doğrulama kütüphanesi geliştirdim. Discord Bot + Socket entegrasyonu ile 500+ müşteri ve 1000+ lisans satışına ulaştım; ürün, fiyatlama ve müşteri desteğini uçtan uca yürüttüm.",
        "Shipped 14+ custom Java/Spigot plugins and a REST-based license-validation library for the Minecraft ecosystem. With Discord-bot and socket integration, reached 500+ customers and 1000+ license sales — owning product, pricing and support end-to-end."
      ),
    },
  ],
  education: [
    {
      _id: "ed1",
      when: ls("Eyl 2021 — Oca 2026", "Sep 2021 — Jan 2026"),
      degree: ls("Bilgisayar Programcılığı (Önlisans)", "Computer Programming (Associate)"),
      org: ls("Anadolu Üniversitesi — AÖF", "Anadolu University — Open Education"),
      description: ls(
        "Açık öğretim önlisans programı.",
        "Open Education Faculty, associate degree."
      ),
    },
    {
      _id: "ed2",
      when: ls("Eyl 2018 — Haz 2021", "Sep 2018 — Jun 2021"),
      degree: ls("Mekatronik (Önlisans)", "Mechatronics (Associate)"),
      org: ls("Akdeniz Üniversitesi", "Akdeniz University"),
      description: ls(
        "Mekatronik önlisans programı.",
        "Mechatronics associate degree."
      ),
    },
  ],
  projects: [
    {
      _id: "p1",
      name: "Farmer v6",
      repo: "Geik-xyz/Farmer-v6",
      language: "Java",
      languageColor: "#b07219",
      stars: 52,
      url: "https://github.com/Geik-xyz/Farmer-v6",
      description: ls(
        "Adanızda eşya toplamak için sanal asistan. Oyun içi ekonomi, kullanıcı & yetki yönetimi ve kolay stok takibi.",
        "A virtual assistant for item collection on your island. In-game economy, user & permission management and easy stock tracking."
      ),
    },
    {
      _id: "p2",
      name: "LeaderOS Plugin",
      repo: "leaderos-net/leaderos-plugin",
      language: "Java",
      languageColor: "#b07219",
      stars: 8,
      url: "https://github.com/leaderos-net/leaderos-plugin",
      description: ls(
        "Minecraft sunucuları için resmi LeaderOS eklentisi. Mağaza, üyelik ve sunucu entegrasyonu.",
        "The official LeaderOS plugin for Minecraft servers. Store, membership and server integration."
      ),
    },
    {
      _id: "p3",
      name: "JavaLicense",
      repo: "poyrazinan/JavaLicense",
      language: "Java",
      languageColor: "#b07219",
      stars: 7,
      url: "https://github.com/poyrazinan/JavaLicense",
      description: ls(
        "Java uygulamaları için sunucu tabanlı lisanslama. Geleneksel anahtarları ortadan kaldıran, güvenli ve verimli çözüm.",
        "Server-based licensing for Java apps. A secure, efficient, key-free licensing solution."
      ),
    },
    {
      _id: "p4",
      name: "License Web API",
      repo: "poyrazinan/license-web-api",
      language: "PHP",
      languageColor: "#8993be",
      stars: 3,
      url: "https://github.com/poyrazinan/license-web-api",
      description: ls(
        "Lisans yöneticisi için web API'si. JavaLicense ile birlikte çalışan sunucu tarafı.",
        "Web API for the license manager. The server side that works together with JavaLicense."
      ),
    },
    {
      _id: "p5",
      name: "Discord Webhook",
      repo: "poyrazinan/Discord-Webhook",
      language: "Java",
      languageColor: "#b07219",
      stars: 2,
      url: "https://github.com/poyrazinan/Discord-Webhook",
      description: ls(
        "Kolayca obje oluşturup çalıştıran Discord Webhook kütüphanesi.",
        "A Discord Webhook library that creates objects and executes them with ease."
      ),
    },
    {
      _id: "p6",
      name: "GitLab Issue Remover",
      repo: "poyrazinan/gitlab-issue-remover",
      language: "Python",
      languageColor: "#3572A5",
      stars: 1,
      url: "https://github.com/poyrazinan/gitlab-issue-remover",
      description: ls(
        "Belirli etiketlere sahip GitLab issue'larını silen ve detayları Excel'e kaydeden script.",
        "A script that deletes GitLab issues with specific labels and logs details into an Excel file."
      ),
    },
  ],
};
