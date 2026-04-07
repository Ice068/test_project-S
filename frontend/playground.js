// =======================
// SANITIZE (เบาลง ให้ยังเขียนได้)
// =======================
function sanitizeHTML(html) {
  // ลบเฉพาะ script (ปลอดภัย)
  return html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

// =======================
// RUN + PREVIEW
// =======================
function runCode() {
  const rawCode = document.getElementById("htmlCode").value;
  const safeCode = sanitizeHTML(rawCode);

  const frame = document.getElementById("previewFrame");

  frame.srcdoc = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: sans-serif;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      ${safeCode}
    </body>
    </html>
  `;

  checkQuest(rawCode);
}

// =======================
// QUEST SYSTEM
// =======================
function checkQuest(code) {
  const status = document.getElementById("status");
  const hint = document.getElementById("hint");

  if (!status || !hint) return;

  const hasH1 = /<h1>(.*?)<\/h1>/i.test(code);
  const hasHello = /hello world/i.test(code);

  if (!hasH1) {
    status.innerText = "❌ ยังไม่สำเร็จ";
    status.className = "error";
    hint.innerText = "💡 ต้องมี <h1>";
    return;
  }

  if (!hasHello) {
    status.innerText = "❌ ยังไม่สำเร็จ";
    status.className = "error";
    hint.innerText = "💡 ต้องมี Hello World";
    return;
  }

  status.innerText = "✅ สำเร็จ!";
  status.className = "success";
  hint.innerText = "🎉 +50 EXP";

  addExp(50);
}

// =======================
// EXP
// =======================
function addExp(amount) {
  let exp = localStorage.getItem("exp") || 0;
  exp = parseInt(exp) + amount;
  localStorage.setItem("exp", exp);
}

// =======================
// AUTO RUN ตอนพิมพ์ (สำคัญมาก)
// =======================
document.getElementById("htmlCode").addEventListener("input", runCode);

// โหลดครั้งแรก
window.onload = runCode;