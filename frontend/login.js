const API = "http://localhost:3000";

async function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(API + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if(data.token){
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
    }else{
        alert(data.message);
    }
}