// ข้อมูลบทเรียน
const lessonsData = [
    {
        id: 1,
        title: "รู้จักกับ HTML",
        icon: "📝",
        description: "เริ่มต้นเรียนรู้พื้นฐาน HTML และโครงสร้างเอกสาร",
        duration: "15 นาที",
        content: `
            <h2>📝 รู้จักกับ HTML</h2>
            <p>HTML (HyperText Markup Language) คือภาษามาร์กอัปที่ใช้สำหรับสร้างเว็บเพจ เป็นพื้นฐานของทุกเว็บไซต์ที่เราเห็นบนอินเทอร์เน็ต</p>
            
            <h3>HTML คืออะไร?</h3>
            <p>HTML เป็นภาษาที่ใช้กำหนดโครงสร้างและเนื้อหาของเว็บเพจ โดยใช้ "แท็ก" (Tags) เพื่อบอกเบราว์เซอร์ว่าแต่ละส่วนของเนื้อหาควรแสดงผลอย่างไร</p>
            
            <h3>โครงสร้างพื้นฐานของ HTML</h3>
            <div class="code-example"><pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;ชื่อหน้าเว็บ&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;สวัสดี!&lt;/h1&gt;
    &lt;p&gt;นี่คือย่อหน้าข้อความ&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre></div>
            
            <h3>ส่วนประกอบสำคัญ</h3>
            <ul>
                <li><strong>&lt;!DOCTYPE html&gt;</strong> - ประกาศชนิดของเอกสาร</li>
                <li><strong>&lt;html&gt;</strong> - แท็กรากของเอกสาร HTML</li>
                <li><strong>&lt;head&gt;</strong> - ส่วนหัวที่เก็บข้อมูลเมตา</li>
                <li><strong>&lt;title&gt;</strong> - ชื่อที่แสดงบนแท็บเบราว์เซอร์</li>
                <li><strong>&lt;body&gt;</strong> - ส่วนเนื้อหาที่จะแสดงบนหน้าเว็บ</li>
            </ul>
        `,
        code: `<!DOCTYPE html>
<html>
<head>
    <title>หน้าเว็บแรกของฉัน</title>
</head>
<body>
    <h1>สวัสดี! ยินดีต้อนรับ</h1>
    <p>นี่คือหน้าเว็บแรกที่ฉันสร้างด้วย HTML</p>
</body>
</html>`
    },
    {
        id: 2,
        title: "หัวข้อและย่อหน้า",
        icon: "📰",
        description: "เรียนรู้การใช้หัวข้อและย่อหน้าต่างๆ",
        duration: "10 นาที",
        content: `
            <h2>📰 หัวข้อและย่อหน้า</h2>
            <p>HTML มีแท็กสำหรับสร้างหัวข้อและย่อหน้าที่หลากหลาย เพื่อจัดระเบียบเนื้อหาให้อ่านง่าย</p>
            
            <h3>แท็กหัวข้อ (Headings)</h3>
            <p>มีหัวข้อ 6 ระดับ จาก h1 ถึง h6 โดย h1 ใหญ่ที่สุดและ h6 เล็กที่สุด</p>
            
            <div class="code-example"><pre>&lt;h1&gt;หัวข้อระดับ 1&lt;/h1&gt;
&lt;h2&gt;หัวข้อระดับ 2&lt;/h2&gt;
&lt;h3&gt;หัวข้อระดับ 3&lt;/h3&gt;
&lt;h4&gt;หัวข้อระดับ 4&lt;/h4&gt;
&lt;h5&gt;หัวข้อระดับ 5&lt;/h5&gt;
&lt;h6&gt;หัวข้อระดับ 6&lt;/h6&gt;</pre></div>
            
            <h3>แท็กย่อหน้า (Paragraphs)</h3>
            <p>ใช้แท็ก &lt;p&gt; สำหรับสร้างย่อหน้าข้อความ</p>
            
            <div class="code-example"><pre>&lt;p&gt;นี่คือย่อหน้าแรก&lt;/p&gt;
&lt;p&gt;นี่คือย่อหน้าที่สอง&lt;/p&gt;</pre></div>
        `,
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>หัวข้อหลัก</h1>
    <h2>หัวข้อรอง</h2>
    <p>นี่คือย่อหน้าข้อความที่อธิบายเนื้อหา</p>
    <h3>หัวข้อย่อย</h3>
    <p>สามารถใช้หลายย่อหน้าได้</p>
</body>
</html>`
    },
    {
        id: 3,
        title: "การจัดรูปแบบข้อความ",
        icon: "✍️",
        description: "เรียนรู้การทำตัวหนา ตัวเอียง และการจัดรูปแบบข้อความ",
        duration: "10 นาที",
        content: `
            <h2>✍️ การจัดรูปแบบข้อความ</h2>
            <p>HTML มีแท็กต่างๆ สำหรับจัดรูปแบบข้อความ เพื่อเน้นความสำคัญหรือเปลี่ยนลักษณะของข้อความ</p>
            
            <h3>แท็กจัดรูปแบบพื้นฐาน</h3>
            <ul>
                <li><strong>&lt;strong&gt;</strong> หรือ <strong>&lt;b&gt;</strong> - ตัวหนา</li>
                <li><em>&lt;em&gt;</em> หรือ <em>&lt;i&gt;</em> - ตัวเอียง</li>
                <li><u>&lt;u&gt;</u> - ขีดเส้นใต้</li>
                <li>&lt;mark&gt; - <mark>ไฮไลต์ข้อความ</mark></li>
                <li>&lt;small&gt; - <small>ข้อความขนาดเล็ก</small></li>
            </ul>
            
            <div class="code-example"><pre>&lt;p&gt;นี่คือ &lt;strong&gt;ข้อความตัวหนา&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;นี่คือ &lt;em&gt;ข้อความตัวเอียง&lt;/em&gt;&lt;/p&gt;
&lt;p&gt;นี่คือ &lt;u&gt;ข้อความขีดเส้นใต้&lt;/u&gt;&lt;/p&gt;</pre></div>
        `,
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>การจัดรูปแบบข้อความ</h1>
    <p>นี่คือ <strong>ข้อความตัวหนา</strong></p>
    <p>นี่คือ <em>ข้อความตัวเอียง</em></p>
    <p>นี่คือ <u>ข้อความขีดเส้นใต้</u></p>
    <p>นี่คือ <mark>ข้อความไฮไลต์</mark></p>
</body>
</html>`
    },
    {
        id: 4,
        title: "รายการ (Lists)",
        icon: "📋",
        description: "เรียนรู้การสร้างรายการแบบมีลำดับและไม่มีลำดับ",
        duration: "10 นาที",
        content: `
            <h2>📋 รายการ (Lists)</h2>
            <p>HTML มีแท็กสำหรับสร้างรายการ 2 แบบ คือรายการไม่มีลำดับและรายการมีลำดับ</p>
            
            <h3>รายการไม่มีลำดับ (Unordered List)</h3>
            <p>ใช้แท็ก &lt;ul&gt; และ &lt;li&gt;</p>
            <div class="code-example"><pre>&lt;ul&gt;
    &lt;li&gt;รายการที่ 1&lt;/li&gt;
    &lt;li&gt;รายการที่ 2&lt;/li&gt;
    &lt;li&gt;รายการที่ 3&lt;/li&gt;
&lt;/ul&gt;</pre></div>
            
            <h3>รายการมีลำดับ (Ordered List)</h3>
            <p>ใช้แท็ก &lt;ol&gt; และ &lt;li&gt;</p>
            <div class="code-example"><pre>&lt;ol&gt;
    &lt;li&gt;ขั้นตอนที่ 1&lt;/li&gt;
    &lt;li&gt;ขั้นตอนที่ 2&lt;/li&gt;
    &lt;li&gt;ขั้นตอนที่ 3&lt;/li&gt;
&lt;/ol&gt;</pre></div>
        `,
        code: `<!DOCTYPE html>
<html>
<body>
    <h2>รายการไม่มีลำดับ</h2>
    <ul>
        <li>แอปเปิล</li>
        <li>กล้วย</li>
        <li>ส้ม</li>
    </ul>
    
    <h2>รายการมีลำดับ</h2>
    <ol>
        <li>ขั้นตอนที่ 1</li>
        <li>ขั้นตอนที่ 2</li>
        <li>ขั้นตอนที่ 3</li>
    </ol>
</body>
</html>`
    },
    {
        id: 5,
        title: "ลิงก์และรูปภาพ",
        icon: "🖼️",
        description: "เรียนรู้การแทรกลิงก์และรูปภาพในหน้าเว็บ",
        duration: "15 นาที",
        content: `
            <h2>🖼️ ลิงก์และรูปภาพ</h2>
            <p>เรียนรู้วิธีเพิ่มลิงก์และรูปภาพเพื่อทำให้เว็บไซต์มีชีวิตชีวามากขึ้น</p>
            
            <h3>ลิงก์ (Links)</h3>
            <p>ใช้แท็ก &lt;a&gt; พร้อม attribute href</p>
            <div class="code-example"><pre>&lt;a href="https://www.google.com"&gt;ไปยัง Google&lt;/a&gt;</pre></div>
            
            <h3>รูปภาพ (Images)</h3>
            <p>ใช้แท็ก &lt;img&gt; พร้อม attribute src และ alt</p>
            <div class="code-example"><pre>&lt;img src="image.jpg" alt="คำอธิบายรูป"&gt;</pre></div>
            
            <h3>คุณสมบัติสำคัญ</h3>
            <ul>
                <li><strong>href</strong> - URL ของลิงก์</li>
                <li><strong>target="_blank"</strong> - เปิดในแท็บใหม่</li>
                <li><strong>src</strong> - ที่อยู่ของรูปภาพ</li>
                <li><strong>alt</strong> - ข้อความแสดงแทนรูป</li>
                <li><strong>width, height</strong> - ขนาดรูปภาพ</li>
            </ul>
        `,
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>ลิงก์และรูปภาพ</h1>
    
    <h2>ลิงก์</h2>
    <a href="https://www.google.com">ไปยัง Google</a>
    <br><br>
    <a href="https://www.youtube.com" target="_blank">เปิด YouTube ในแท็บใหม่</a>
    
    <h2>รูปภาพ</h2>
    <img src="https://via.placeholder.com/300" alt="ตัวอย่างรูปภาพ">
</body>
</html>`
    },
    {
        id: 6,
        title: "ตารางและฟอร์ม",
        icon: "📊",
        description: "เรียนรู้การสร้างตารางและฟอร์มรับข้อมูล",
        duration: "20 นาที",
        content: `
            <h2>📊 ตารางและฟอร์ม</h2>
            <p>เรียนรู้การสร้างตารางแสดงข้อมูลและฟอร์มรับข้อมูลจากผู้ใช้</p>
            
            <h3>ตาราง (Tables)</h3>
            <p>ใช้แท็ก &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</p>
            <div class="code-example"><pre>&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;ชื่อ&lt;/th&gt;
        &lt;th&gt;อายุ&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;สมชาย&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre></div>
            
            <h3>ฟอร์ม (Forms)</h3>
            <p>ใช้แท็ก &lt;form&gt; และ &lt;input&gt; ประเภทต่างๆ</p>
            <div class="code-example"><pre>&lt;form&gt;
    &lt;label&gt;ชื่อ:&lt;/label&gt;
    &lt;input type="text" name="name"&gt;
    &lt;br&gt;
    &lt;label&gt;อีเมล:&lt;/label&gt;
    &lt;input type="email" name="email"&gt;
    &lt;br&gt;
    &lt;button type="submit"&gt;ส่งข้อมูล&lt;/button&gt;
&lt;/form&gt;</pre></div>
        `,
        code: `<!DOCTYPE html>
<html>
<body>
    <h2>ตารางข้อมูล</h2>
    <table border="1">
        <tr>
            <th>ชื่อ</th>
            <th>อายุ</th>
        </tr>
        <tr>
            <td>สมชาย</td>
            <td>25</td>
        </tr>
        <tr>
            <td>สมหญิง</td>
            <td>23</td>
        </tr>
    </table>
    
    <h2>ฟอร์มข้อมูล</h2>
    <form>
        <label>ชื่อ:</label><br>
        <input type="text" name="name"><br><br>
        <label>อีเมล:</label><br>
        <input type="email" name="email"><br><br>
        <button type="submit">ส่งข้อมูล</button>
    </form>
</body>
</html>`
    }
];

// ตัวอย่างโค้ดสำหรับ Editor
const codeExamples = [
    {
        title: "หน้าเว็บพื้นฐาน",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>หน้าเว็บของฉัน</title>
</head>
<body>
    <h1>สวัสดี!</h1>
    <p>นี่คือหน้าเว็บแรกของฉัน</p>
</body>
</html>`
    },
    {
        title: "หัวข้อและย่อหน้า",
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>หัวข้อหลัก</h1>
    <h2>หัวข้อรอง</h2>
    <p>นี่คือย่อหน้าข้อความ</p>
    <p>ย่อหน้าที่สอง</p>
</body>
</html>`
    },
    {
        title: "รูปภาพและลิงก์",
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>รูปภาพและลิงก์</h1>
    <img src="https://via.placeholder.com/300" alt="ตัวอย่าง">
    <br><br>
    <a href="https://www.google.com">ไปยัง Google</a>
</body>
</html>`
    },
    {
        title: "รายการ",
        code: `<!DOCTYPE html>
<html>
<body>
    <h2>รายการไม่มีลำดับ</h2>
    <ul>
        <li>แอปเปิล</li>
        <li>กล้วย</li>
        <li>ส้ม</li>
    </ul>
    
    <h2>รายการมีลำดับ</h2>
    <ol>
        <li>ขั้นตอนที่ 1</li>
        <li>ขั้นตอนที่ 2</li>
        <li>ขั้นตอนที่ 3</li>
    </ol>
</body>
</html>`
    }
];

// คำถามแบบทดสอบ
const quizQuestions = [
    {
        id: 1,
        question: "HTML ย่อมาจากอะไร?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperText Making Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "แท็กใดใช้สำหรับสร้างหัวข้อใหญ่ที่สุด?",
        answers: ["<h6>", "<head>", "<h1>", "<heading>"],
        correct: 2
    },
    {
        id: 3,
        question: "แท็กใดใช้สำหรับสร้างย่อหน้า?",
        answers: ["<paragraph>", "<p>", "<pg>", "<text>"],
        correct: 1
    },
    {
        id: 4,
        question: "แท็กใดใช้สำหรับทำข้อความให้เป็นตัวหนา?",
        answers: ["<bold>", "<b>", "<strong>", "ทั้ง b และ strong"],
        correct: 3
    },
    {
        id: 5,
        question: "แท็กใดใช้สำหรับแทรกรูปภาพ?",
        answers: ["<image>", "<img>", "<picture>", "<photo>"],
        correct: 1
    },
    {
        id: 6,
        question: "attribute ใดใช้กำหนด URL ของลิงก์?",
        answers: ["src", "link", "href", "url"],
        correct: 2
    },
    {
        id: 7,
        question: "แท็กใดใช้สำหรับสร้างรายการมีลำดับ?",
        answers: ["<ul>", "<ol>", "<list>", "<li>"],
        correct: 1
    },
    {
        id: 8,
        question: "แท็กใดอยู่ในส่วน <head> ของเอกสาร HTML?",
        answers: ["<body>", "<title>", "<h1>", "<p>"],
        correct: 1
    },
    {
        id: 9,
        question: "attribute alt ของแท็ก <img> ใช้ทำอะไร?",
        answers: [
            "กำหนดขนาดรูป",
            "กำหนดข้อความแสดงแทนรูป",
            "กำหนดตำแหน่งรูป",
            "กำหนดสีของรูป"
        ],
        correct: 1
    },
    {
        id: 10,
        question: "แท็กใดใช้สำหรับสร้างตาราง?",
        answers: ["<table>", "<tab>", "<grid>", "<data>"],
        correct: 0
    }
];

// State Management
let currentLesson = null;
let currentQuizIndex = 0;
let quizAnswers = [];
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
let quizResult = JSON.parse(localStorage.getItem('quizResult')) || null;

// Navigation
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Close mobile menu
    document.getElementById('sidebar').classList.remove('active');
    
    // Update content based on page
    if (page === 'home') {
        updateHomeStats();
    } else if (page === 'lessons') {
        renderLessons();
    } else if (page === 'editor') {
        initEditor();
    } else if (page === 'quiz') {
        initQuiz();
    } else if (page === 'progress') {
        updateProgressPage();
    }
}

// Home Page
function updateHomeStats() {
    document.getElementById('lessonsCompleted').textContent = completedLessons.length;
    document.getElementById('quizScore').textContent = quizResult ? `${quizResult.score}/10` : '-';
    
    const totalProgress = ((completedLessons.length / lessonsData.length) * 50) + 
                         (quizResult ? (quizResult.score / 10) * 50 : 0);
    document.getElementById('progressPercent').textContent = Math.round(totalProgress) + '%';
}

// Lessons Page
function renderLessons() {
    const lessonsList = document.getElementById('lessons-list');
    lessonsList.innerHTML = lessonsData.map(lesson => `
        <div class="lesson-card ${completedLessons.includes(lesson.id) ? 'completed' : ''}" 
             onclick="openLesson(${lesson.id})">
            <div class="lesson-icon">${lesson.icon}</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-description">${lesson.description}</div>
            <div class="lesson-duration">⏱️ ${lesson.duration}</div>
        </div>
    `).join('');
}

function openLesson(lessonId) {
    currentLesson = lessonsData.find(l => l.id === lessonId);
    if (!currentLesson) return;
    
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = `
        <div class="lesson-detail">
            ${currentLesson.content}
            <div style="margin-top: 2rem; text-align: center;">
                <button class="btn btn-primary" onclick="markLessonComplete()">
                    ✓ เรียนจบบทนี้แล้ว
                </button>
            </div>
        </div>
    `;
    
    navigateTo('lesson-detail');
    document.getElementById('lesson-detail-page').classList.add('active');
}

function markLessonComplete() {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
        completedLessons.push(currentLesson.id);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        alert('🎉 ยินดีด้วย! คุณเรียนจบบทนี้แล้ว');
        navigateTo('lessons');
    }
}

// Code Editor
let defaultCode = codeExamples[0].code;
let currentCode = defaultCode;

function initEditor() {
    const editor = document.getElementById('code-editor');
    const examplesList = document.getElementById('examples-list');
    
    // Set default code
    editor.value = currentCode;
    runCode(); // แสดงผลทันทีเมื่อเปิดหน้า
    
    // Render examples
    const allExamples = [...codeExamples, ...lessonsData];
    examplesList.innerHTML = allExamples.map((example, index) => `
        <button class="example-btn" onclick="loadExample(${index})">
            ${example.icon || '📄'} ${example.title}
        </button>
    `).join('');
}

function loadExample(index) {
    const allExamples = [...codeExamples, ...lessonsData];
    const example = allExamples[index];
    document.getElementById('code-editor').value = example.code;
    currentCode = example.code;
    runCode();
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const iframe = document.getElementById('preview-iframe');
    currentCode = code;
    
    // Update iframe content
    iframe.srcdoc = code;
}

function resetCode() {
    document.getElementById('code-editor').value = defaultCode;
    currentCode = defaultCode;
    runCode();
}

// Quiz
function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    
    if (quizAnswers.length === 0) {
        quizContainer.innerHTML = `
            <div class="quiz-start">
                <h2>แบบทดสอบ HTML</h2>
                <p>ทดสอบความรู้ที่คุณได้เรียนมา 10 ข้อ</p>
                <button class="btn btn-primary" onclick="startQuiz()">เริ่มทำแบบทดสอบ</button>
                ${quizResult ? `
                    <div style="margin-top: 2rem; padding: 1rem; background: var(--gray-100); border-radius: 0.5rem;">
                        <p>คะแนนครั้งล่าสุด: ${quizResult.score}/10 คะแนน</p>
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        renderQuizQuestion();
    }
}

function startQuiz() {
    currentQuizIndex = 0;
    quizAnswers = [];
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const question = quizQuestions[currentQuizIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    quizContainer.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <div class="quiz-progress">
                    คำถามข้อที่ ${currentQuizIndex + 1} / ${quizQuestions.length}
                </div>
            </div>
            <div class="question-card">
                <div class="question-text">${question.question}</div>
                <div class="answers-list">
                    ${question.answers.map((answer, index) => `
                        <button class="answer-btn" onclick="selectAnswer(${index})">
                            ${answer}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function selectAnswer(answerIndex) {
    quizAnswers[currentQuizIndex] = answerIndex;
    
    if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        if (quizAnswers[index] === q.correct) {
            score++;
        }
    });
    
    quizResult = { score, total: quizQuestions.length, date: new Date().toISOString() };
    localStorage.setItem('quizResult', JSON.stringify(quizResult));
    
    const percentage = (score / quizQuestions.length) * 100;
    let emoji = '🎉';
    let message = 'ยอดเยี่ยม!';
    
    if (percentage < 50) {
        emoji = '😊';
        message = 'พยายามต่อไปนะ!';
    } else if (percentage < 80) {
        emoji = '👍';
        message = 'เก่งมาก!';
    }
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="quiz-results">
            <div class="result-emoji">${emoji}</div>
            <div class="result-message">${message}</div>
            <div class="score-display">${score}/${quizQuestions.length}</div>
            <p>คุณได้ ${percentage.toFixed(0)}% จากแบบทดสอบนี้</p>
            <button class="btn btn-primary" onclick="startQuiz()">ทำแบบทดสอบอีกครั้ง</button>
            <button class="btn btn-secondary" onclick="navigateTo('home')">กลับหน้าแรก</button>
        </div>
    `;
    
    quizAnswers = [];
    currentQuizIndex = 0;
}

// Progress Page
function updateProgressPage() {
    // Update progress circle
    const totalProgress = ((completedLessons.length / lessonsData.length) * 50) + 
                         (quizResult ? (quizResult.score / 10) * 50 : 0);
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (totalProgress / 100) * circumference;
    
    const progressCircle = document.getElementById('progress-circle');
    progressCircle.style.strokeDashoffset = offset;
    document.getElementById('overall-progress').textContent = Math.round(totalProgress) + '%';
    
    // Update completed lessons list
    const completedList = document.getElementById('completed-lessons-list');
    if (completedLessons.length > 0) {
        completedList.innerHTML = completedLessons.map(id => {
            const lesson = lessonsData.find(l => l.id === id);
            return `
                <div class="completed-lesson-item">
                    <span class="icon">${lesson.icon}</span>
                    <span>${lesson.title}</span>
                    <span style="margin-left: auto; color: var(--green-600);">✓</span>
                </div>
            `;
        }).join('');
    } else {
        completedList.innerHTML = '<p style="text-align: center; color: var(--gray-600);">ยังไม่มีบทเรียนที่เรียนจบ</p>';
    }
    
    // Update quiz results
    const quizResultsDiv = document.getElementById('quiz-results');
    if (quizResult) {
        const percentage = (quizResult.score / quizResult.total) * 100;
        quizResultsDiv.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 3rem; font-weight: bold; color: var(--purple-600); margin-bottom: 1rem;">
                    ${quizResult.score}/${quizResult.total}
                </div>
                <p>คะแนน ${percentage.toFixed(0)}%</p>
                <p style="color: var(--gray-600); font-size: 0.875rem;">
                    ทำเมื่อ: ${new Date(quizResult.date).toLocaleDateString('th-TH')}
                </p>
            </div>
        `;
    } else {
        quizResultsDiv.innerHTML = '<p style="text-align: center; color: var(--gray-600);">ยังไม่ได้ทำแบบทดสอบ</p>';
    }
}

// Mobile Menu
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
});

// Navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        navigateTo(page);
    });
});

/* ===== Navigation ===== */
function navigate(page){
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'))
    document.getElementById(page).classList.remove('hidden')
}

/* ===== Sidebar ===== */
const sidebar = document.getElementById("sidebar")

document.getElementById("openSidebar").onclick = () =>{
    sidebar.classList.remove("-translate-x-full")
}

document.getElementById("closeSidebar").onclick = () =>{
    sidebar.classList.add("-translate-x-full")
}

/* ===== Editor ===== */
function runCode(){
    const code = document.getElementById("code").value
    document.getElementById("preview").srcdoc = code
}

/* ===== Demo Lessons ===== */
const lessons = [
    "HTML คืออะไร",
    "Tag พื้นฐาน",
    "Link และ Image",
    "Table",
    "Form",
    "Semantic"
]

const list = document.getElementById("lessons-list")

lessons.forEach((l,i)=>{
    list.innerHTML += `
    <div class="bg-gray-800 p-4 rounded">
        <h3>${l}</h3>
        <button onclick="completeLesson()" class="mt-2 bg-purple-600 px-2 py-1 rounded">เรียนจบ</button>
    </div>`
})

/* ===== Progress ===== */
let completed = 0

function completeLesson(){
    completed++
    document.getElementById("lessonsCompleted").innerText = completed

    let percent = Math.floor((completed/6)*100)
    document.getElementById("progressPercent").innerText = percent + "%"
    document.getElementById("overall-progress").innerText = percent + "%"
}

// Initialize app
navigateTo('home');

checkAuth();
