/* กันเข้าหน้าโดยไม่ login */
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

/* ดึงชื่อ user */
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  document.getElementById("userName").textContent = user.username;
  document.getElementById("profileName").textContent = user.username;
}

/* logout */
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
