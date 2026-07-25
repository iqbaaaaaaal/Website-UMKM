/*
  PUSAT EDIT DATA WEBSITE
  Ubah teks dan daftar UMKM di file ini. Jangan hapus tanda koma antar item.
  Nomor WhatsApp: gunakan format internasional tanpa + atau spasi, contoh 628123456789.
*/
const SITE_DATA = {
  config: {
    university: "Universitas Diponegoro",
    team: "TIM KKN UNDIP TA 2026",
    village: "Desa Tambakboyo",
    location: "Desa Tambakboyo,Kecamatan Tawangsari,Jawa Tengah, Indonesia", // Ganti kecamatan, kabupaten, dan provinsi
    potential: "Kuliner Lokal, kerajinan, dan Usaha Koveksi",
    heroDescription: "Ruang digital untuk mengenalkan produk unggulan, cerita usaha, dan semangat gotong royong warga Desa Tambakboyo.",
    villageDescription: "Desa Tambakboyo memiliki potensi usaha warga yang beragam. Melalui katalog ini, produk lokal dapat ditemukan lebih mudah oleh masyarakat dan calon pelanggan.",
    contacts: {
      whatsapp: "6288216646061", // Ganti nomor WhatsApp koordinator
      email: "tambakboyoumkm@gmail.com",
      instagram: "https://instagram.com/",
    }
  },
  // Tambah UMKM: salin satu blok { ... } di bawah, lalu isi datanya.
  umkm: [
    { name: "Dapur Bu Sari", category: "Kuliner", description: "Aneka keripik rumahan dengan rasa gurih, dibuat dari bahan pilihan warga setempat.", price: "Mulai Rp12.000", owner: "Ibu Sari", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1621939514649-280e2aa5f20e?auto=format&fit=crop&w=900&q=80", accent: "#C8A66A" },
    { name: "Kopi Tepi Desa", category: "Minuman", description: "Kopi bubuk pilihan dengan aroma hangat untuk menemani aktivitas sehari-hari.", price: "Mulai Rp18.000", owner: "Pak Arif", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", accent: "#8B5E3C" },
    { name: "Anyaman Lestari", category: "Kerajinan", description: "Tas dan wadah anyaman yang dibuat telaten oleh perajin lokal Tambakboyo.", price: "Mulai Rp35.000", owner: "Ibu Wati", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80", accent: "#788B5B" },
    { name: "Kebun Segar", category: "Pertanian", description: "Sayur dan hasil kebun segar dari petani desa, siap untuk kebutuhan harian.", price: "Hubungi penjual", owner: "Kelompok Tani", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80", accent: "#4E7D55" },
    { name: "Batik Rona Jawa", category: "Fashion", description: "Kain dan aksesori batik dengan motif bernuansa lokal yang elegan.", price: "Mulai Rp75.000", owner: "Ibu Rina", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1603251579711-4513a15735f1?auto=format&fit=crop&w=900&q=80", accent: "#8A5A44" },
    { name: "Manis Nusantara", category: "Kuliner", description: "Jajanan pasar dan kue kering untuk acara keluarga maupun oleh-oleh.", price: "Mulai Rp15.000", owner: "Ibu Nia", whatsapp: "628123456789", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80", accent: "#B85C5C" }
  ],
  gallery: [
    { caption: "Produk olahan warga", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=80" },
    { caption: "Proses penuh ketelitian", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1100&q=80" },
    { caption: "Semangat UMKM lokal", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1100&q=80" }
  ]
};
