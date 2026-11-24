const VALID_USER = "kelompok9";
const VALID_PASS = "9999";
const SESSION_KEY = "rs_sehat_sentosa_verified";
const FALLBACK_SESSION_KEY = "loginJanjiTemu";

const judulKeluar = document.getElementById("judulKeluar");
const pesanKeluar = document.getElementById("pesanKeluar");

function bersihkanSesi() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(FALLBACK_SESSION_KEY);
}

function tampilkanPesanKeluar() {
  if (judulKeluar && !judulKeluar.textContent.trim()) {
    judulKeluar.textContent = "Terima kasih dan lekas sembuh";
  }

  if (pesanKeluar && !pesanKeluar.textContent.trim()) {
    pesanKeluar.textContent =
      "Semoga kesehatan Anda segera pulih. Terima kasih telah mempercayakan layanan kesehatan Anda kepada RS Sehat Sentosa.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  bersihkanSesi();
  tampilkanPesanKeluar();
});
