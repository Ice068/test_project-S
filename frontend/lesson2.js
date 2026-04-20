function checkCode() {
  const code = document.getElementById("codeInput").value.toLowerCase();
  const result = document.getElementById("result");
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("❌ กรุณา login ก่อน");
    window.location.href = "login.html";
    return;
  }

  if (
    code.includes("<a") &&
    code.includes("href") &&
    code.includes("dashboard.html") &&
    code.includes("ไป dashboard")
  ) {
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
    result.textContent = "❌ ยังไม่ถูก ลองคิดว่าเป็น 'ประตูวาร์ป'";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}