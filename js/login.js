const form = document.getElementById("formLogin");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    window.location.href = "kontak.html";
  } else {
    pesan.textContent = "Login gagal. Username atau password salah.";
    pesan.classList.add("tampil");
  }
});

