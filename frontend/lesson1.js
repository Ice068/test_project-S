function checkCode() {
  const code = document.getElementById("codeInput").value;
  const result = document.getElementById("result");
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("❌ กรุณา login ก่อน");
    window.location.href = "login.html";
    return;
  }

  if (
    code.includes("<html>") &&
    code.includes("<body>") &&
    code.toLowerCase().includes("hello world")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! +50 EXP";

    // 🔥 ส่ง EXP เข้า backend
    fetch("http://localhost:3000/add-exp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        exp: 50
      })
    })
    .then(res => res.json())
    .then(() => {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    })
    .catch(() => {
      result.style.color = "red";
      result.textContent = "❌ เพิ่ม EXP ไม่สำเร็จ";
    });

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ถูกต้อง ลองใหม่อีกครั้ง";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}

const done = localStorage.getItem("lesson1_done");

if (done) {
  result.textContent = "✅ เคยผ่านแล้ว";
  return;
}

localStorage.setItem("lesson1_done", "true");