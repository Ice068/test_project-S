const user = localStorage.getItem("user");
if (user) {
    document.getElementById("username").textContent = user;
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}