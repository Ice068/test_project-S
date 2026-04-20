const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ===== DB =====
const db = new sqlite3.Database("./devquest.db");

// ===== สร้างตาราง =====
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT,
  exp INTEGER DEFAULT 0
)
`);

// ===== ROOT =====
app.get("/", (req, res) => {
  res.send("🚀 DevQuest API ทำงานอยู่!");
});

// ===== SIGNUP =====
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    function (err) {
      if (err) return res.json({ error: "สมัครไม่สำเร็จ" });

      res.json({ message: "สมัครสำเร็จ" });
    }
  );
});

// ===== LOGIN =====
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],
    (err, row) => {
      if (!row) return res.json({ error: "ข้อมูลไม่ถูกต้อง" });

      res.json({ message: "เข้าสู่ระบบสำเร็จ", user: row });
    }
  );
});

// ===== ADD EXP =====
app.post("/add-exp", (req, res) => {
  const { userId, exp } = req.body;

  db.run(
    "UPDATE users SET exp = exp + ? WHERE id = ?",
    [exp, userId],
    function (err) {
      if (err) return res.json({ error: "เพิ่ม EXP ไม่สำเร็จ" });

      res.json({ message: "เพิ่ม EXP สำเร็จ" });
    }
  );
});

// ===== GET USER =====
app.get("/user/:id", (req, res) => {
  db.get(
    "SELECT id, username, exp FROM users WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (!row) return res.json({ error: "ไม่พบ user" });

      res.json(row);
    }
  );
});

// ===== LEADERBOARD =====
app.get("/leaderboard", (req, res) => {
  db.all(
    "SELECT username, exp FROM users ORDER BY exp DESC LIMIT 10",
    [],
    (err, rows) => {
      res.json(rows);
    }
  );
});

// ===== START SERVER =====
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});