document.addEventListener("DOMContentLoaded", () => {

  // TAB SWITCH
  const tabs = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll(".form");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.tab;

      forms.forEach(form => {
        form.classList.remove("active");
        if (form.id === target + "Form") {
          form.classList.add("active");
        }
      });
    });
  });

  // SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", e => {
      e.preventDefault();

      const user = document.getElementById("signupUser").value;
      const pass = document.getElementById("signupPass").value;
      const confirm = document.getElementById("signupConfirm").value;

      if (!user || !pass || !confirm) {
        alert("กรอกข้อมูลให้ครบ");
        return;
      }

      if (pass !== confirm) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
      }

      // เก็บข้อมูล
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);

      alert("สมัครสมาชิกสำเร็จ 🎉");

      // ไปแท็บ login
      document.querySelector('[data-tab="login"]').click();
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();

      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;

      const savedUser = localStorage.getItem("user");
      const savedPass = localStorage.getItem("pass");

      if (user === savedUser && pass === savedPass) {
        alert("เข้าสู่ระบบสำเร็จ 🚀");

        // 🔥 สำคัญ: ไปหน้า Dashboard
        window.location.href = "dashboard.html";

      } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    });
  }

});

//โหลดชื่อ user จาก login
const user = localStorage.getltem("user");

if (!user) {
  //ไม่พบ login กลับไปหน้า login
  window.location.href = "login.html"; 
} else {
  document.getElementById("username").innerText = user;
}

// logout 
function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("pass");
  window.location.href = "login.html";
}