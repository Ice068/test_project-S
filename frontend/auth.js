// signup
function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("สมัครสมาชิกสำเร็จ!");
    window.location.href = "login.html";
}

// login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        localStorage.setItem("isLogin", "true");
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "index.html";
    } else {
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
}

// logout
function logout() {
    localStorage.removeItem("isLogin");
    window.location.href = "login.html";
}

// protect page
function checkAuth() {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    }
}