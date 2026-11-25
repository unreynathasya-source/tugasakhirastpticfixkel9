const VALID_USER = "kelompok9";
const VALID_PASS = "9999";
const SESSION_KEY = "rs_sehat_sentosa_verified";
const FALLBACK_SESSION_KEY = "loginJanjiTemu";

function sudahLogin() {
  return (
    sessionStorage.getItem(SESSION_KEY) === "true" ||
    sessionStorage.getItem(FALLBACK_SESSION_KEY) === "true"
  );
}

function simpanSesiLogin() {
  sessionStorage.setItem(SESSION_KEY, "true");
  sessionStorage.setItem(FALLBACK_SESSION_KEY, "true");
}

function hapusSesiLogin() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(FALLBACK_SESSION_KEY);
}

document.addEventListener("DOMContentLoaded", function () {
  // Bersihkan sesi saat link "Keluar" diklik
const linkKeluar = document.querySelectorAll('a[href="keluar.html"]');
  linkKeluar.forEach(function (link) {
    if (link.textContent.trim().toLowerCase() === "keluar") {
      link.addEventListener("click", function () {
        hapusSesiLogin();
      });
    }
  });

  // Logika login di halaman janji temu (kontak.html / janji.html)
  const gerbangLoginJanji = document.getElementById("gerbangLoginJanji");
  const kontenJanjiTemu = document.getElementById("kontenJanjiTemu");
  const formLoginJanji = document.getElementById("formLoginJanji");
  const kunciFormBtn = document.getElementById("kunciFormBtn");

  if (gerbangLoginJanji && kontenJanjiTemu) {
    function perbaruiTampilan() {
      if (sudahLogin()) {
        gerbangLoginJanji.style.display = "none";
        kontenJanjiTemu.style.display = "block";
      } else {
        gerbangLoginJanji.style.display = "block";
        kontenJanjiTemu.style.display = "none";
      }
    }

    perbaruiTampilan();

    if (formLoginJanji) {
      formLoginJanji.addEventListener("submit", function (event) {
        event.preventDefault();

        const userInput = document.getElementById("userJanji");
        const passInput = document.getElementById("passJanji");
        const errorBox = document.getElementById("errorJanji");

        const username = userInput ? userInput.value.trim() : "";
        const password = passInput ? passInput.value.trim() : "";

        if (username === VALID_USER && password === VALID_PASS) {
          simpanSesiLogin();
          if (errorBox) errorBox.textContent = "";
          perbaruiTampilan();
        } else if (errorBox) {
          errorBox.textContent = "Username atau password salah.";
        }
      });
    }

    if (kunciFormBtn) {
      kunciFormBtn.addEventListener("click", function () {
        hapusSesiLogin();
        if (formLoginJanji) formLoginJanji.reset();
        perbaruiTampilan();
      });
    }
  }
});
