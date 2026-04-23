function runCode() {
  const code = document.getElementById("codeArea").value;
  const output = document.getElementById("output");

  // ป้องกัน script
  const forbidden = ["<script", "javascript:", "onerror", "onload"];

  for (let word of forbidden) {
    if (code.toLowerCase().includes(word)) {
      alert("❌ ห้ามใช้ JavaScript");
      return;
    }
  }

  output.setAttribute("sandbox", "allow-same-origin");
  output.srcdoc = code;
}

/* ===== ตรวจโครงสร้าง ===== */
function checkCode() {
  const code = document.getElementById("codeArea").value.toLowerCase();
  const result = document.getElementById("result");
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("❌ กรุณา login ก่อน");
    return;
  }

  if (
    code.includes("<html") &&
    code.includes("<head") &&
    code.includes("<body") &&
    (
      code.includes("<h1") ||
      code.includes("<p") ||
      code.includes("<img") ||
      code.includes("<ul")
    )
  ) {
    result.style.color = "#22c55e";
    result.textContent = "👑 FINAL BOSS ผ่าน! +200 EXP";

    fetch("http://localhost:3000/add-exp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        exp: 200
      })
    })
    .then(() => {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    });

  } else {
    result.style.color = "red";
    result.textContent = "❌ โครงสร้างยังไม่ครบ (html / head / body)";
  }
}

function goBack() {
  window.location.href = "dashboard.html";
}