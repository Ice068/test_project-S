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
    code.includes("<nav>") &&
    code.includes("<a") &&
    code.includes("home") &&
    code.includes("about") &&
    code.includes("contact")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! คุณสร้าง Navbar ได้แล้ว +30 EXP";

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
    .then(() => {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    });

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ถูก ลองคิดว่า Navbar คือเมนูด้านบน";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}