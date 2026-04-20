// ===== ไปหน้า lesson =====
function go(page, lessonKey = null) {

  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("❌ กรุณา login ก่อน");
    window.location.href = "login.html";
    return;
  }

  // 🔒 ระบบปลดล็อค (เช็คว่าผ่าน lesson ก่อนหน้าไหม)
  if (lessonKey) {
    const unlocked = localStorage.getItem(lessonKey);

    if (!unlocked) {
      alert("🔒 ต้องทำด่านก่อนหน้าให้เสร็จก่อน!");
      return;
    }
  }

  window.location.href = page;
}


// ===== logout =====
function logout() {
  localStorage.removeItem("userId"); // ❗ ไม่ลบทั้งหมด
  window.location.href = "login.html";
}