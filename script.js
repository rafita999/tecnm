let num1, num2;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('sum-problem').textContent = `¿Cuánto es ${num1} + ${num2}?`;
    document.getElementById('user-answer').value = '';
    document.getElementById('result').textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value);
    if (userAnswer === num1 + num2) {
        document.getElementById('result').textContent = '¡Correcto!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = 'Incorrecto, intenta de nuevo.';
        document.getElementById('result').style.color = 'red';
    }
}

document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('new-problem').addEventListener('click', generateProblem);

window.onload = generateProblem;
