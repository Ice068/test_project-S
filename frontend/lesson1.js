function checkCode() {
    const code = document.getElementById("codeInput").value;
    const result = document.getElementById("result");

    if (
    code.includes("<html>") &&
    code.includes("<body>") &&
    code.toLowerCase().includes("hello world")
)
    {
        result.style.color = "#22c55e";
        result.textContent = "🎉 ถูกต้อง! คุณเข้าใจโครงสร้าง HTML แล้ว +50 EXP";

        let exp = parseInt(localStorage.getItem("exp") || 0);
        localStorage.setItem("exp", exp + 50);

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        result.style.color = "red";
        result.textContent = "❌ ยังไม่ถูกต้อง ลองตรวจสอบโครงสร้าง HTML และข้อความที่แสดงอีกครั้ง";
    }
}

function goBack() {
    window.location.href = "dashboard.html";
}