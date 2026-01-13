function cariAyat() {
  console.log("TOMBOL KEKLIK");

  const text = document.getElementById("curhat").value.toLowerCase();

  if (!window.dataayat) {
    alert("dataayat belum ke-load");
    return;
  }

  const cocok = dataayat.filter(item =>
    item.keyword.some(k => text.includes(k))
  );

  let ayat = "Allah selalu dekat, jangan nyerah 🤍";
  let arti = "";
  let surat = "";

  if (cocok.length > 0) {
    const random = cocok[Math.floor(Math.random() * cocok.length)];
    ayat = random.ayat;
    arti = random.arti;
    surat = random.surat;
  }

  // SIMPAN RIWAYAT
  let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];
  riwayat.push({
    curhat: text,
    ayat,
    arti,
    surat,
    waktu: new Date().toLocaleString()
  });
  localStorage.setItem("riwayat", JSON.stringify(riwayat));

  let hasil = ayat + "\n\n" + arti + "\n(" + surat + ")";
  document.getElementById("hasilAyat").innerText = hasil;
  document.getElementById("popup").classList.add("show");
}

function tutupPopup() {
  document.getElementById("popup").classList.remove("show");
}
