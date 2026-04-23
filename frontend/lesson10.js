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
    code.includes("<div>") &&
    code.includes("กล่อง") &&
    code.includes("</div>") &&
    code.includes("<section>") &&
    code.includes("เนื้อหา") &&
    code.includes("</section>")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! คุณจัด Layout ได้แล้ว +20 EXP";

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
    .then(() => {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    });

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ถูก ลองใช้ <div> และ <section>";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}