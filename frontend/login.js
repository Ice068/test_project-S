// ===== Elements =====
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const emailGroup = document.getElementById("emailGroup");
const confirmGroup = document.getElementById("confirmGroup");

const form = document.getElementById("form");
const message = document.getElementById("message");

const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const submitBtn = document.getElementById("submitBtn");

let mode = "login";


// ===== สลับไป Login =====
loginTab.onclick = () => {
  mode = "login";
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  emailGroup.style.display = "none";
  confirmGroup.style.display = "none";

  submitBtn.textContent = "ลุยเลย! (Login)";
  message.textContent = "";
};


// ===== สลับไป Signup =====
signupTab.onclick = () => {
  mode = "signup";
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  emailGroup.style.display = "block";
  confirmGroup.style.display = "block";

  submitBtn.textContent = "สมัครเลย!";
  message.textContent = "";
};


// ===== Submit =====
form.onsubmit = (e) => {
  e.preventDefault();

  // ===== SIGNUP =====
  if (mode === "signup") {

    if (password.value !== confirmPassword.value) {
      message.style.color = "red";
      message.textContent = "❌ รหัสผ่านไม่ตรงกัน";
      return;
    }

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
    .then(res => res.json())
    .then(data => {

      if (data.error) {
        message.style.color = "red";
        message.textContent = "❌ " + data.error;
        return;
      }

      message.style.color = "#22c55e";
      message.textContent = "🎉 สมัครสมาชิกสำเร็จ!";
    });

    return;
  }


  // ===== LOGIN =====
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {

    if (data.error) {
      message.style.color = "red";
      message.textContent = "❌ " + data.error;
      return;
    }

    message.style.color = "#22c55e";
    message.textContent = "✅ เข้าสู่ระบบสำเร็จ!";

    // ✅ เก็บ userId
    localStorage.setItem("userId", data.user.id);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  });
};


// ===== Auto redirect ถ้า login แล้ว =====
if (localStorage.getItem("userId")) {
  window.location.href = "dashboard.html";
}