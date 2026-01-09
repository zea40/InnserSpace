const list = document.getElementById("listRiwayat");
const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

if (riwayat.length === 0) {
  list.innerHTML = "<p>Belum ada curhat</p>";
}

riwayat.forEach(item => {
  const card = document.createElement("div");
  card.className = "history-card";
  card.innerHTML = `
    <small>${item.waktu}</small>
    <p><b>Curhat:</b> ${item.curhat}</p>
    <p><b>Ayat:</b> ${item.ayat}</p>
  `;
  list.appendChild(card);
});

function hapusRiwayat() {
  if (confirm("Yakin mau hapus semua riwayat?")) {
    localStorage.removeItem("riwayat");
    location.reload();
  }
}
