require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const SECRET = process.env.JWT_SECRET;

// โหลด user
let users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// ========================
// REGISTER
// ========================
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashed,
        exp: 0,
        completedQuests: 0,
        rank: "Bronze"
    });

    fs.writeFileSync("data.json", JSON.stringify(users, null, 2));

    res.json({ message: "สมัครสำเร็จ" });
});

// ========================
// LOGIN
// ========================
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: "รหัสผิด" });

    const token = jwt.sign(
        { username: user.username },
        SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

// ========================
// VERIFY TOKEN
// ========================
function auth(req, res, next){
    const token = req.headers.authorization;

    if(!token) return res.sendStatus(401);

    jwt.verify(token, SECRET, (err, user)=>{
        if(err) return res.sendStatus(403);

        req.user = user;
        next();
    });
}

// ========================
// GET USER (protected)
// ========================
app.get("/user", auth, (req, res) => {
    const user = users.find(u => u.username === req.user.username);
    res.json(user);
});

// ========================
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});