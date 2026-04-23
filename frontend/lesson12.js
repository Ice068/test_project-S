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
    code.includes("<video") &&
    code.includes("src") &&
    code.includes("video.mp4") &&
    code.includes("controls")
  ) {
    result.style.color = "#22c55e";
    result.textContent = "🎉 ถูกต้อง! คุณใช้ Video ได้แล้ว +20 EXP";

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
    result.textContent = "❌ ยังไม่ถูก ลองใช้ <video> + controls";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}