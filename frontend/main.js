// ================= DATA =================

// Lessons
const lessonsData = [ /* (ใช้ของเดิมคุณได้เลย ไม่ต้องแก้) */ ];

// Code examples
const codeExamples = [ /* (ใช้ของเดิมคุณได้เลย) */ ];

// Quiz
const quizQuestions = [ /* (ใช้ของเดิมคุณได้เลย) */ ];


// ================= STORAGE =================

const storage = {
    get: (key, fallback) => {
        try {
            return JSON.parse(localStorage.getItem(key)) ?? fallback;
        } catch {
            return fallback;
        }
    },
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
};


// ================= STATE =================

let currentLesson = null;
let currentQuizIndex = 0;
let quizAnswers = [];

let completedLessons = storage.get('completedLessons', []);
let quizResult = storage.get('quizResult', null);

let defaultCode = codeExamples[0]?.code || "";
let currentCode = localStorage.getItem('code') || defaultCode;


// ================= INIT =================

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    bindEvents();
    navigateTo('home');
}


// ================= EVENTS =================

function bindEvents() {

    // Mobile menu
    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.add('active');
    });

    document.getElementById('closeSidebar')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('active');
    });

    // Nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
}


// ================= NAVIGATION =================

function navigateTo(page) {

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    const pageEl = document.getElementById(`${page}-page`);
    if (!pageEl) return;

    pageEl.classList.add('active');
    document.getElementById('sidebar')?.classList.remove('active');

    const routes = {
        home: updateHomeStats,
        lessons: renderLessons,
        editor: initEditor,
        quiz: initQuiz,
        progress: updateProgressPage
    };

    routes[page]?.();
}


// ================= HOME =================

function updateHomeStats() {
    safeSetText('lessonsCompleted', completedLessons.length);
    safeSetText('quizScore', quizResult ? `${quizResult.score}/10` : '-');

    const totalProgress =
        (completedLessons.length / lessonsData.length) * 50 +
        (quizResult ? (quizResult.score / 10) * 50 : 0);

    safeSetText('progressPercent', Math.round(totalProgress) + '%');
}


// ================= LESSONS =================

function renderLessons() {
    const el = document.getElementById('lessons-list');
    if (!el) return;

    el.innerHTML = lessonsData.map(renderLessonCard).join('');
}

function renderLessonCard(lesson) {
    return `
        <div class="lesson-card ${completedLessons.includes(lesson.id) ? 'completed' : ''}" 
             onclick="openLesson(${lesson.id})">
            <div class="lesson-icon">${lesson.icon}</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-description">${lesson.description}</div>
            <div class="lesson-duration">⏱️ ${lesson.duration}</div>
        </div>
    `;
}

function openLesson(id) {
    currentLesson = lessonsData.find(l => l.id === id);
    if (!currentLesson) return;

    const el = document.getElementById('lesson-content');
    if (!el) return;

    el.innerHTML = `
        ${currentLesson.content}
        <div style="text-align:center;margin-top:2rem;">
            <button class="btn btn-primary" onclick="markLessonComplete()">✓ เรียนจบ</button>
        </div>
    `;

    navigateTo('lesson-detail');
}

function markLessonComplete() {
    if (!completedLessons.includes(currentLesson.id)) {
        completedLessons.push(currentLesson.id);
        storage.set('completedLessons', completedLessons);
        alert('🎉 เรียนจบแล้ว!');
    }
    navigateTo('lessons');
}


// ================= EDITOR =================

function initEditor() {
    const editor = document.getElementById('code-editor');
    const preview = document.getElementById('preview-iframe');

    if (!editor || !preview) return;

    editor.value = currentCode;
    runCode();

    editor.addEventListener('input', (e) => {
        currentCode = e.target.value;
        localStorage.setItem('code', currentCode);
    });

    renderExamples();
}

function renderExamples() {
    const el = document.getElementById('examples-list');
    if (!el) return;

    const all = [...codeExamples, ...lessonsData];

    el.innerHTML = all.map((ex, i) => `
        <button class="example-btn" onclick="loadExample(${i})">
            ${ex.icon || '📄'} ${ex.title}
        </button>
    `).join('');
}

function loadExample(i) {
    const all = [...codeExamples, ...lessonsData];
    const ex = all[i];

    document.getElementById('code-editor').value = ex.code;
    currentCode = ex.code;
    runCode();
}

function runCode() {
    const code = document.getElementById('code-editor')?.value;
    const iframe = document.getElementById('preview-iframe');
    if (iframe) iframe.srcdoc = code;
}


// ================= QUIZ =================

function initQuiz() {
    if (quizAnswers.length === 0) renderQuizStart();
    else renderQuizQuestion();
}

function renderQuizStart() {
    const el = document.getElementById('quiz-container');
    if (!el) return;

    el.innerHTML = `
        <h2>Quiz HTML</h2>
        <button class="btn btn-primary" onclick="startQuiz()">เริ่ม</button>
    `;
}

function startQuiz() {
    currentQuizIndex = 0;
    quizAnswers = [];
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    const el = document.getElementById('quiz-container');
    if (!el) return;

    el.innerHTML = `
        <h3>${q.question}</h3>
        ${q.answers.map((a, i) => `
            <button onclick="selectAnswer(${i})">${a}</button>
        `).join('')}
    `;
}

function selectAnswer(i) {
    quizAnswers.push(i);

    if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        setTimeout(renderQuizQuestion, 200);
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    let score = 0;

    quizQuestions.forEach((q, i) => {
        if (quizAnswers[i] === q.correct) score++;
    });

    quizResult = { score };
    storage.set('quizResult', quizResult);

    const el = document.getElementById('quiz-container');
    if (!el) return;

    el.innerHTML = `
        <h2>คะแนน: ${score}/${quizQuestions.length}</h2>
        <button onclick="startQuiz()">ทำใหม่</button>
    `;
}


// ================= PROGRESS =================

function updateProgressPage() {
    const total =
        (completedLessons.length / lessonsData.length) * 50 +
        (quizResult ? (quizResult.score / 10) * 50 : 0);

    safeSetText('overall-progress', Math.round(total) + '%');
}


// ================= UTIL =================

function safeSetText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}