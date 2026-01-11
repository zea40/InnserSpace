var dataayat = [
  {
    keyword: "marah",
    ayat: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ",
    arti: "Wahai orang-orang yang beriman, mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sesungguhnya Allah beserta orang-orang yang sabar.",
    surat: "Al-Baqarah: 153"
  },
  {
    keyword: "marah",
    ayat: "الَّذِيْنَ يُنْفِقُوْنَ فِى السَّرَّۤاءِ وَالضَّرَّۤاءِ وَالْكٰظِمِيْنَ الْغَيْظَ وَالْعَافِيْنَ عَنِ النَّاسِۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَۚ",
    arti: "(yaitu) orang-orang yang selalu berinfak, baik di waktu lapang maupun sempit, orang-orang yang mengendalikan kemurkaannya, dan orang-orang yang memaafkan (kesalahan) orang lain. Allah mencintai orang-orang yang berbuat kebaikan.",
    surat: "Ali-Imran: 134"
  },
  {
    keyword: "marah",
    ayat: "وَعِبَادُ الرَّحْمٰنِ الَّذِيْنَ يَمْشُوْنَ عَلَى الْاَرْضِ هَوْنًا وَّاِذَا خَاطَبَهُمُ الْجٰهِلُوْنَ قَالُوْا سَلٰمًا",
    arti: "Hamba-hamba Tuhan Yang Maha Pengasih itu adalah yang berjalan di atas bumi dengan rendah hati dan apabila orang-orang bodoh menyapa mereka (dengan kata-kata yang menghina), mereka mengucapkan, Salam.",
    surat: "Al-Furqan: 63"
  },
  {
    keyword: "sedih",
    ayat: "وَلَا تَهِنُوْا وَلَا تَحْزَنُوْا وَاَنْتُمُ الْاَعْلَوْنَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ",
    arti: "Janganlah kamu (merasa) lemah dan jangan (pula) bersedih hati, padahal kamu paling tinggi (derajatnya) jika kamu orang-orang mukmin.",
    surat: "Ali-Imran: 139"
  },
  {
    keyword: "sedih, sendiri",
    ayat: "لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَاۚ",
    arti: "Janganlah engkau bersedih, sesungguhnya Allah bersama kita.",
    surat: "At-Taubah: 40"
  },
  {
    keyword: "sedih",
    ayat: "الَّذِيْنَ اٰمَنُوْا وَتَطْمَىِٕنُّ قُلُوْبُهُمْ بِذِكْرِ اللّٰهِ ۗ اَلَا بِذِكْرِ اللّٰهِ تَطْمَىِٕنُّ الْقُلُوْبُ ۗ",
    arti: "(Yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, bahwa hanya dengan mengingat Allah hati akan selalu tenteram.",
    surat: "Ar-Ra'd: 28"
  },
  {
    keyword: "takut",
    ayat: "اَلَآ اِنَّ اَوْلِيَاۤءَ اللّٰهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَۚ",
    arti: "Ketahuilah bahwa sesungguhnya (bagi) para wali Allah itu tidak ada rasa takut yang menimpa mereka dan mereka pun tidak bersedih.",
    surat: "Yunus: 46"
  },
  {
    keyword: "capek, lelah, cape, burnout, pengen nyerah, overwhelmed",
    ayat: "لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا",
    arti: "Allah tidak membebani seseorang, kecuali menurut kesanggupannya.",
    surat: "Al-Baqarah: 286"
  },
  {
    keyword: "capek",
    ayat: "وَقَالَ رَبُّكُمُ ادْعُوْنِيْٓ اَسْتَجِبْ لَكُمْ",
    arti: "Tuhanmu berfirman, “Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu (apa yang kamu harapkan).",
    surat: "Ghafir: 60"
  },
  {
    keyword: "sendiri",
    ayat: "اِنَّنِيْٓ اَنَا اللّٰهُ لَآ اِلٰهَ اِلَّآ اَنَا۠ فَاعْبُدْنِيْۙ وَاَقِمِ الصَّلٰوةَ لِذِكْرِيْ",
    arti: "Sesungguhnya Aku adalah Allah, tidak ada tuhan selain Aku. Maka, sembahlah Aku dan tegakkanlah salat untuk mengingat-Ku.",
    surat: "Thaha: 14"
  },
  {
    keyword: "insecure, jelek, minder",
    ayat: "لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْٓ اَحْسَنِ تَقْوِيْمٍۖ",
    arti: "sungguh, Kami benar-benar telah menciptakan manusia dalam bentuk yang sebaik-baiknya.",
    surat: "At-Tin: 4"
  },
  {
    keyword: "insecure, iri, minder",
    ayat: "وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللّٰهُ بِهٖ بَعْضَكُمْ عَلٰى بَعْضٍ",
    arti: "Janganlah kamu berangan-angan (iri hati) terhadap apa yang telah dilebihkan Allah kepada sebagian kamu atas sebagian yang lain.",
    surat: "An-Nisa: 32"
  }
];
