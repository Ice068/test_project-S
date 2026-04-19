function runCode() {
  const code = document.getElementById("codeArea").value;
  const output = document.getElementById("output");

  const forbidden = ["<script", "javascript:", "onerror", "onload"];

  for (let word of forbidden) {
    if (code.toLowerCase().includes(word)) {
      alert("❌ ห้ามใช้ JavaScript หรือโค้ดอันตราย");
      return;
    }
  }

  output.setAttribute("sandbox", "allow-scripts");
  output.srcdoc = code;
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

window.onload = runCode;