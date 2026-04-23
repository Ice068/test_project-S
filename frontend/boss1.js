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
    code.includes("<h1") &&
    code.includes("<img") &&
    code.includes("<ul") &&
    code.includes("<li") &&
    code.includes("<a") &&
    code.includes("<button") &&
    (code.includes("<div") || code.includes("<section"))
  ) {
    result.style.color = "#22c55e";
    result.textContent = "👑 ผ่านด่าน BOSS! +100 EXP";

    fetch("http://localhost:3000/add-exp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        exp: 100
      })
    })
    .then(() => {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    });

  } else {
    result.style.color = "red";
    result.textContent = "❌ ยังไม่ครบ ลองใส่ element ให้ครบทุกอย่าง";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}