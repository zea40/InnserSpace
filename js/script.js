document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("kirimBtn")
    .addEventListener("click", cariayat);
});

function cariayat() {
  const text = document.getElementById("curhat").value.toLowerCase();

  // ambil semua ayat yang keyword-nya cocok
  const cocok = dataayat.filter(item =>
    text.includes(item.keyword)
  );

  let ayat = "Allah selalu dekat, jangan nyerah 🤍";
  let arti = "";
  let surat = "";

  if (cocok.length > 0) {
    const random = cocok[Math.floor(Math.random() * cocok.length)];
    ayat = random.ayat;
    arti = random.arti || "";
    surat = random.surat || "";
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

  let hasil = ayat;
  if (arti) hasil += "\n\n" + arti;
  if (surat) hasil += "\n(" + surat + ")";

  document.getElementById("hasilayat").innerText = hasil;
  document.getElementById("popup").classList.add("show");
}

function tutupPopup() {
  document.getElementById("popup").classList.remove("show");
}
