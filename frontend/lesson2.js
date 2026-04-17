function checkCode() {
  const code = document.getElementById("codeInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (
    code.includes("<a") &&
    code.includes("href") &&
    code.includes("dashboard.html") &&
    code.includes("ไป dashboard")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! คุณสร้างลิงก์ได้แล้ว +30 EXP";

    let exp = parseInt(localStorage.getItem("exp")) || 0;
    localStorage.setItem("exp", exp + 30);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ถูก ลองคิดว่าเป็น 'ประตูวาร์ป'";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}