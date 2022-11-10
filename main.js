let error = document.getElementById("error");
let info = document.getElementById("last-result");
let randomNumber = 0;

function startGame() {
    let valMax = Number(document.getElementById('max').value);
    let valMin = Number(document.getElementById('min').value);
    if (valMax < 0 || valMin < 0) {

        error.innerHTML = "Вы ввели неверный диапазон!";
    } else if (Number.isInteger(valMax) === false || Number.isInteger(valMin) === false) {
        error.innerHTML = "Вы ввели неверный диапазон!";
    } else {
        alert('Привет, я загадал число от min до max вашего диапазона. Попробуй угадать его за 5 попыток!');
        randomNumber = Math.floor(Math.random() * (valMax - valMin));
        Start.onclick = null;
        // console.log(randomNumber);
    }
}
let prevValue;
let count = 6;

function checkNumber() {
    let inputNumber1 = Number(document.getElementById('num').value);
    if (count == 1) {
        alert("Game over!");
        return;
    }
    if (inputNumber1 == randomNumber) {
        info.innerHTML = `Поздравляю! Ты угадал задуманное число за ${count} попыток!`;
    } else {
        info.innerHTML = "Не угадал!";
        count--;
        if (prevValue) {
            const distance = Math.abs(randomNumber - inputNumber1);
            const prevDistance = Math.abs(randomNumber - prevValue);
            if (distance < prevDistance) {
                info.innerHTML = `Не угадал, но теплее. Осталось ${count} попыток!`;
            } else if (distance > prevDistance) {
                info.innerHTML = `Не угадал, холодно. Осталось ${count} попыток!`;

            }
        }
        prevValue = inputNumber1;

    }
}
function stopGame() {
    window.close();
}
