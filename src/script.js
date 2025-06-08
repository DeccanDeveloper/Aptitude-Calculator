function calculateScore() {
    const total = parseInt(document.getElementById('total').value) || 0;
    const correct = parseInt(document.getElementById('correct').value) || 0;
    const wrong = parseInt(document.getElementById('wrong').value) || 0;
    const negativeMark = parseFloat(document.getElementById('negative').value) || 0;

    const score = correct - wrong * negativeMark;
    const attempted = correct + wrong;
    const notAttempted = total > 0 ? total - attempted : 0;

    let message = `Score: ${score}`;
    if (total > 0) {
        message += ` | Attempted: ${attempted} | Not Attempted: ${notAttempted}`;
    }
    document.getElementById('result').innerText = message;
}

document.getElementById('calculate').addEventListener('click', calculateScore);
