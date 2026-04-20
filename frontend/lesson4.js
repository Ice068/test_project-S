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
  const done = localStorage.getItem("lesson_sidebar_done");
  if (done) {
    result.style.color = "#facc15";
    result.textContent = "⚠️ เคยผ่านแล้ว ได้ EXP ไปแล้ว";
    return;
  }

  // ✅ ตรวจโค้ด (ยืดหยุ่นขึ้น)
  const hasSidebar = code.includes("sidebar");
  const hasMenu1 = code.includes("หน้าแรก");
  const hasMenu2 = code.includes("เกี่ยวกับเรา");
  const hasMenu3 = code.includes("ติดต่อเรา");

  if (hasSidebar && hasMenu1 && hasMenu2 && hasMenu3) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! +30 EXP";

    // 🔥 ส่ง EXP เข้า backend
    fetch("http://localhost:3000/add-exp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        exp: 30
      })
    })
    .then(res => res.json())
    .then(() => {
      // บันทึกว่าผ่านแล้ว
      localStorage.setItem("lesson_sidebar_done", "true");

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
    result.textContent = "❌ ยังไม่ถูก ลองคิดว่า Sidebar คือเมนูด้านข้าง";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}