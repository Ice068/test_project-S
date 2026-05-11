const userId = localStorage.getItem("userId");

if (!userId) window.location.href = "login.html";

fetch(`http://localhost:3000/user/${userId}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("userName").textContent = data.username;
    document.getElementById("profileName").textContent = data.username;

    // EXP
    document.querySelector(".cards .card:nth-child(1) .big").textContent = data.exp;

    // Level
    const level = Math.floor(data.exp / 100) + 1;
    document.querySelector(".level").textContent = `Lv.${level}`;

    // Rank
    let rank = "Bronze";
    if (data.exp >= 500) rank = "Gold";
    else if (data.exp >= 200) rank = "Silver";
    document.querySelector(".cards .card:nth-child(4) .big").textContent = rank;

    // ✅ นับ quest ที่เสร็จแล้ว
    const questKeys = ["quest_lesson1", "quest_lesson2", "quest_lesson3"];
    const done = questKeys.filter(k => localStorage.getItem(`${k}_${userId}`) === "done").length;
    document.querySelector(".cards .card:nth-child(2) .big").textContent = `${done}/3`;
  });

function logout() {
  localStorage.removeItem("userId");
  window.location.href = "login.html";
}