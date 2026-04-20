const userId = localStorage.getItem("userId");

if (!userId) {
  window.location.href = "login.html";
}

// ดึงข้อมูลจาก backend
fetch(`http://localhost:3000/user/${userId}`)
  .then(res => res.json())
  .then(data => {

    const exp = data.exp;

    /* คำนวณ */
    const level = Math.floor(exp / 100) + 1;
    const quests = Math.floor(exp / 30);
    const percent = Math.min((exp % 100), 100);

    /* แสดงค่า */
    document.getElementById("exp").textContent = exp;
    document.getElementById("level").textContent = level;
    document.getElementById("quest").textContent = quests;
    document.getElementById("percent").textContent = percent + "%";

    /* Chart */
    const ctx = document.getElementById("progressChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["EXP", "Level", "Quest"],
        datasets: [{
          label: "ความคืบหน้า",
          data: [exp, level * 10, quests * 20],
          backgroundColor: [
            "#06b6d4",
            "#3b82f6",
            "#22c55e"
          ]
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  })
  .catch(() => {
    alert("❌ โหลดข้อมูลไม่สำเร็จ");
  });

  function checkUnlock() {
  if (!localStorage.getItem("lesson1_done")) {
    document.getElementById("btn2").classList.add("locked");
  }
}
checkUnlock();