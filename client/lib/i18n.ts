export type Lang = "en" | "tr";

export const translations: Record<Lang, any> = {
  tr: {
    nav: {
      about: "Hakkımızda",
      solutions: "Çözümler",
      services: "Hizmetler",
      contact: "İletişim",
    },
    hero: {
      title: "Jeolojik Veriden Yapay Zeka Destekli Çözümlere",
      subtitle:
        "MagmAI, jeolojik ve sondaj verilerini gelişmiş yapay zekâ algoritmalarıyla analiz eder. Gerçek zamanlı yeraltı modellemeleriyle petrol, gaz ve jeotermal sektörlerinde operasyonel verimliliği artırır.",
      ctaPrimary: "Çözümlerimizi İnceleyin",
      ctaSecondary: "İletişime Geç",
    },
    about: {
      title: "MagmAI Hakkında",
      body: "Jeoloji ve yapay zekayı bir araya getirerek gerçek zamanlı yeraltı içgörüleri sunuyoruz. Hedefimiz, yorumlamayı daha hızlı, daha akıllı ve saha operasyonlarına daha bağlı hale getirmek.",
      features: ["Jeoloji", "Yapay Zeka", "Veri"],
    },
    solutions: {
      title: "Çözümlerimiz",
      subtitle: "Akıllı jeolojik çözümler için yapay zeka destekli araçlar",
      items: [
        {
          title: "NovaFacies",
          desc: "Log ve gaz verilerinden AI tabanlı litoloji ve fasiyes tanıma",
        },
        {
          title: "NovaMech",
          desc: "Gerçek zamanlı jeomekanik zekâ ve kırılganlık tahmini",
        },
        {
          title: "NovaGas",
          desc: "Rezervuar analizi ve kaçak tespiti için ileri gaz analitiği",
        },
      ],
      cta: "Detay ve Demo İste",
    },
    services: {
      title: "Saha Hizmetleri",
      subtitle: "Deneyimli kuyu jeologları ile sahada, profesyonel destek",
      cta: "Teklif Al",
      items: [
        {
          title: "Saha Jeolog Desteği",
          desc: "Deneyimli jeologlar ile denetim, litoloji değerlendirme ve raporlama",
        },
        {
          title: "Yerinde Veri Entegrasyonu",
          desc: "Kuyu, sondaj ve litolojik verilerin gerçek zamanlı analizi",
        },
        {
          title: "Raporlama ve Kalite",
          desc: "Günlük raporlar, özetler ve veri kalitesi kontrolü",
        },
      ],
    },
    contact: {
      title: "Bize Ulaşın",
      body: "Sorularınız için e‑posta veya telefon üzerinden hızlıca iletişime geçin.",
      email: "contact@magmai.tech",
      phone: "+90 505 130 66 23",
    },
    footer: {
      copyright: "© 2025 MagmAI O&G Solutions — From Strata to Data",
    },
  },
  en: {
    nav: {
      about: "About",
      solutions: "Solutions",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "From Geological Data to AI-Powered Solutions",
      subtitle:
        "MagmAI analyzes geological and drilling data with advanced AI algorithms. Real-time subsurface modeling improves operational efficiency in oil, gas and geothermal industries.",
      ctaPrimary: "Explore our Solutions",
      ctaSecondary: "Contact Us",
    },
    about: {
      title: "About MagmAI",
      body: "We combine geology and AI to deliver real-time subsurface insights. Our goal is to make interpretation faster, smarter, and more connected to field operations.",
      features: ["Geology", "AI", "Data"],
    },
    solutions: {
      title: "Our Solutions",
      subtitle: "AI-powered tools for intelligent geological solutions",
      items: [
        {
          title: "NovaFacies",
          desc: "AI-based lithology and facies recognition from logs and gas data",
        },
        {
          title: "NovaMech",
          desc: "Real-time geomechanical intelligence and brittleness prediction",
        },
        {
          title: "NovaGas",
          desc: "Advanced gas chromatography analytics for reservoir and leak detection",
        },
      ],
      cta: "Request demo & details",
    },
    services: {
      title: "On-Site Services",
      subtitle:
        "Accurate and fast assessment with AI-assisted field geologists",
      cta: "Get a quote",
      items: [
        {
          title: "Wellsite Geologist Support",
          desc: "Experienced geologists for QA, lithology evaluation and reporting",
        },
        {
          title: "On-Site Data Integration",
          desc: "Real-time analysis of well, drilling and lithological data",
        },
        {
          title: "Reporting & QC",
          desc: "Daily reports, summaries and data quality checks",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      body: "Reach out via email or phone for more information.",
      email: "contact@magmai.tech",
      phone: "+90 505 130 66 23",
    },
    footer: {
      copyright: "© 2025 MagmAI O&G Solutions — From Strata to Data",
    },
  },
};
