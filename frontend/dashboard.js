const userId = localStorage.getItem("userId");

if (!userId) {
  window.location.href = "login.html";
}

// ดึงข้อมูล user
fetch(`http://localhost:3000/user/${userId}`)
  .then(res => res.json())
  .then(data => {

    document.getElementById("username").textContent = data.username;
    document.getElementById("exp").textContent = data.exp;

    // คำนวณ level
    const level = Math.floor(data.exp / 100) + 1;
    document.getElementById("level").textContent = level;
  });


// logout
function logout() {
  localStorage.removeItem("userId");
  window.location.href = "login.html";
}