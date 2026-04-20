function checkCode() {
  const code = document.getElementById("codeInput").value.toLowerCase();
  const result = document.getElementById("result");
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("❌ กรุณา login ก่อน");
    window.location.href = "login.html";
    return;
  }

  // 🔒 กันรับ EXP ซ้ำ
  const done = localStorage.getItem("lesson3_done");
  if (done) {
    result.style.color = "#facc15";
    result.textContent = "⚠️ เคยผ่านแล้ว ได้ EXP ไปแล้ว";
    return;
  }

  // ✅ ตรวจโค้ด (แบบเข้มขึ้น)
  const correct = /<h1>\s*my website\s*<\/h1>/i;

  if (correct.test(code)) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! +20 EXP";

    // 🔥 ส่ง EXP เข้า backend
    fetch("http://localhost:3000/add-exp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        exp: 20
      })
    })
    .then(res => res.json())
    .then(() => {
      // บันทึกว่าเคยผ่านแล้ว
      localStorage.setItem("lesson4_done", "true");

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
    result.textContent = "❌ ยังไม่ถูก ลองใช้ <h1> ให้ถูกต้อง";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}