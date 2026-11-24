document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var pesan = document.getElementById("pesanError");

  if (user === "admin" && pass === "admin123") {
    window.location.href = "janji.html";
  } else {
    pesan.textContent = "Login gagal. Username atau password salah.";
    pesan.classList.add("tampil");
  }
});
