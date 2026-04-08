const API = "http://localhost:3000";

// โหลดข้อมูล
async function loadUser() {
    const res = await fetch(API + "/user");
    const data = await res.json();

    document.getElementById("username").innerText = data.username;

    document.querySelectorAll(".card h2")[0].innerText = data.exp;
    document.querySelectorAll(".card h2")[1].innerText = `${data.completedQuests}/${data.totalQuests}`;
    document.querySelectorAll(".card h2")[2].innerText = `${data.bosses}/3`;
    document.querySelectorAll(".card h2")[3].innerText = data.rank;
}

// กดทำเควส
async function completeQuest() {
    await fetch(API + "/complete-quest", {
        method: "POST"
    });

    await fetch(API + "/add-exp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exp: 50 })
    });

    loadUser();
}

function startStudy() {
    window.location.href = "study.html";
}

// logout
function logout() {
    alert("ออกจากระบบ");
}

const token = localStorage.getItem("token");

fetch("http://localhost:3000/user", {
    headers:{
        "Authorization": token
    }
});

// โหลดตอนเปิดหน้า
loadUser();