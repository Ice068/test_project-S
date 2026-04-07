function sanitizeHTML(html) {
  // ❌ ลบ script tag
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");

  // ❌ ลบ event handler เช่น onclick=
  html = html.replace(/on\w+="[^"]*"/gi, "");

  // ❌ ลบ javascript: URL
  html = html.replace(/javascript:/gi, "");

  return html;
}

function runCode() {
  const rawCode = document.getElementById("htmlCode").value;

  // sanitize ก่อน
  const safeCode = sanitizeHTML(rawCode);

  const frame = document.getElementById("previewFrame");

  // ใช้ srcdoc + sandbox
  frame.setAttribute(
    "srcdoc",
    `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: sans-serif; padding:10px; }
      </style>
    </head>
    <body>
      ${safeCode}
    </body>
    </html>
    `
  );
}

function sanitizeHTML(html) {
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
  html = html.replace(/on\w+="[^"]*"/gi, "");
  html = html.replace(/javascript:/gi, "");
  return html;
}

// =======================
// RUN + PREVIEW
// =======================
function runCode() {
  const rawCode = document.getElementById("htmlCode").value;
  const safeCode = sanitizeHTML(rawCode);

  const frame = document.getElementById("previewFrame");

  frame.srcdoc = `
    <html>
      <body>${safeCode}</body>
    </html>
  `;

  checkQuest(rawCode);
}

// =======================
// QUEST CHECK SYSTEM 🔥
// =======================
function checkQuest(code) {
  const status = document.getElementById("status");
  const hint = document.getElementById("hint");

  // เควส: ต้องมี <h1>Hello World</h1>
  const hasH1 = /<h1>(.*?)<\/h1>/i.test(code);
  const hasHello = /hello world/i.test(code);

  if (!hasH1) {
    status.innerText = "❌ ยังไม่สำเร็จ";
    status.className = "error";
    hint.innerText = "💡 ต้องมีแท็ก <h1>";
    return;
  }

  if (!hasHello) {
    status.innerText = "❌ ยังไม่สำเร็จ";
    status.className = "error";
    hint.innerText = "💡 ต้องมีคำว่า Hello World";
    return;
  }

  // ✅ สำเร็จ
  status.innerText = "✅ เควสสำเร็จ!";
  status.className = "success";
  hint.innerText = "🎉 เก่งมาก! ได้ +50 EXP";

  addExp(50);
}

// =======================
// EXP SYSTEM
// =======================
function addExp(amount) {
  let exp = localStorage.getItem("exp") || 0;
  exp = parseInt(exp) + amount;

  localStorage.setItem("exp", exp);
}


// auto run
window.onload = runCode;