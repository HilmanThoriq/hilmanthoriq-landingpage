// src/config/appsConfig.js
export const appsData = {
  "finterra-apps": {
    name: "FINTERRA",
    logo: "/assets/finterra-logo.png", 
    logoInitial: "F",
    logoColors: "#6de1d2",
    logoColorsDark: "#56bfb4",
    tagline: "Kelola Keuangan Anda",
    description: "FINTERRA membantu Anda mengelola keuangan pribadi dengan fitur pelacakan pengeluaran, perencanaan anggaran, dan analisis finansial yang komprehensif.",
    downloadUrl: "/apps/finterra-app.apk",
  },
  
  "mimikri-apps": {
    name: "MIMIKRI",
    logo: "/assets/mimikri-logo.png",
    logoInitial: "M",
    logoColors: "from-purple-500 to-pink-600",
    tagline: "Pelajari Bahasa dengan Cara yang Menyenangkan",
    description: "MIMIKRI adalah aplikasi pembelajaran bahasa yang inovatif dengan metode interactive learning. Tingkatkan kemampuan bahasa Anda dengan game, quiz, dan latihan yang engaging!",
    downloadUrl: "/apps/mimikri-app.apk",
  },

  "findr-apps": {
    name: "FINDR",
    logo: "/assets/findr-logo.png",
    logoInitial: "F",
    logoColors: "from-emerald-500 to-teal-600",
    tagline: "Temukan Apa yang Anda Cari",
    description: "FINDR memudahkan Anda menemukan tempat-tempat menarik di sekitar. Dari restoran, kafe, hingga objek wisata, semua ada dalam genggaman Anda. Eksplorasi lebih mudah dengan FINDR!",
    downloadUrl: "/apps/findr-app.apk",
  }
}

// Helper function for get app data
export const getAppData = (slug) => {
  return appsData[slug] || null
}