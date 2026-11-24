const VALID_USER = "kelompok9";
const VALID_PASS = "9999";
const SESSION_KEY = "rs_sehat_sentosa_verified";
const REDIRECT_PAGE = "janji.html"; 

const formLogin = document.getElementById("formLogin");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const pesanError = document.getElementById("pesanError");
const togglePassword = document.getElementById("togglePassword");


if (sessionStorage.getItem(SESSION_KEY) === "true") {
  window.location.href = REDIRECT_PAGE;
}

// Fitur lihat / sembunyikan password
if (togglePassword && inputPassword) {
  togglePassword.addEventListener("click", function () {
    const sedangTersembunyi = inputPassword.type === "password";
    inputPassword.type = sedangTersembunyi ? "text" : "password";
    togglePassword.textContent = sedangTersembunyi ? "Sembunyi" : "Lihat";
  });
}

// Proses submit form login
if (formLogin) {
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = inputUsername ? inputUsername.value.trim() : "";
    const password = inputPassword ? inputPassword.value.trim() : "";

    if (!username || !password) {
      if (pesanError) {
        pesanError.textContent = "Username dan password wajib diisi.";
      }
      return;
    }

    if (username === VALID_USER && password === VALID_PASS) {
      sessionStorage.setItem(SESSION_KEY, "true");
      if (pesanError) {
        pesanError.textContent = "";
      }
      window.location.href = REDIRECT_PAGE;
    } else {
      if (pesanError) {
        pesanError.textContent = "Username atau password salah. Gunakan kelompok9 / 9999.";
      }
    }
  });
}

