function cariAyat() {
  console.log("KEKLIK 🔥");

  const text = document.getElementById("curhat").value.toLowerCase();
  const cocok = dataayat.filter(d => text.includes(d.keyword));

  const hasil = cocok.length
    ? cocok[Math.floor(Math.random() * cocok.length)].ayat
    : "Allah selalu dekat 🤍";

  document.getElementById("hasilayat").innerText = hasil;
  document.getElementById("popup").classList.add("show");
}

function tutupPopup() {
  document.getElementById("popup").classList.remove("show");
}
