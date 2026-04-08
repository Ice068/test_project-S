function checkAnswers() {
    let score = 0;
    const answers = {
        q1: "b",
        q2: "a",
        q3: "b"
    };
    for(let q in answers){
        const selected = document.querySelector('input[name="${q}"]:checked');
        if(selected && selected.value === answers[q]) {
            score++;
        }
    }
    document.getElementById("result").textContent = `คะแนนของคุณคือ ${score} จาก 3 ข้อ`;
}