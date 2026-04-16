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

/* ===== สลับไป Login ===== */
loginTab.onclick = () => {
  mode = "login";
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  emailGroup.style.display = "none";
  confirmGroup.style.display = "none";

  submitBtn.textContent = "ลุยเลย! (Login)";
  message.textContent = "";
};

/* ===== สลับไป Signup ===== */
signupTab.onclick = () => {
  mode = "signup";
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  emailGroup.style.display = "block";
  confirmGroup.style.display = "block";

  submitBtn.textContent = "สมัครเลย!";
  message.textContent = "";
};

/* ===== Submit ===== */
form.onsubmit = (e) => {
  e.preventDefault();

  /* ===== สมัคร ===== */
  if (mode === "signup") {
    if (password.value !== confirmPassword.value) {
      message.style.color = "red";
      message.textContent = "❌ รหัสผ่านไม่ตรงกัน";
      return;
    }

    // เก็บ user ลง localStorage
    const user = {
      username: username.value,
      password: password.value
    };

    localStorage.setItem("user", JSON.stringify(user));

    message.style.color = "#22c55e";
    message.textContent = "🎉 สมัครสมาชิกสำเร็จ!";

    return;
  }

  /* ===== Login ===== */
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    message.style.color = "red";
    message.textContent = "❌ ยังไม่มีบัญชี กรุณาสมัครก่อน";
    return;
  }

  if (
    username.value === savedUser.username &&
    password.value === savedUser.password
  ) {
    message.style.color = "#22c55e";
    message.textContent = "✅ เข้าสู่ระบบสำเร็จ!";

    // บันทึกสถานะ login
    localStorage.setItem("loggedIn", "true");

    // ลิ้งไปหน้าหลัก
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    message.style.color = "red";
    message.textContent = "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
};

/* ===== Auto redirect ถ้า login อยู่แล้ว ===== */
if (localStorage.getItem("loggedIn") === "true") {
  window.location.href = "dashboard.html";
}