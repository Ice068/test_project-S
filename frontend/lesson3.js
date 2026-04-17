function checkCode() {
  const code = document.getElementById("codeInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (
    code.includes("<h1>") &&
    code.includes("my website") &&
    code.includes("</h1>")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! คุณใช้ Heading ได้แล้ว +20 EXP";

    let exp = parseInt(localStorage.getItem("exp")) || 0;
    localStorage.setItem("exp", exp + 20);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ถูก ลองใช้ <h1> ให้ถูกต้อง";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}