const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let timeLeft;
let timerInterval;
let isRunning = false;
const startTimer = (duration) =>{
    let timer = duration;
        timerInterval = setInterval(() =>{
        const displayMinute = parseInt(timer / 60, 10);
        const displaySecond = parseInt(timer % 60, 10);

        const min = displayMinute < 10 ? '0' + displayMinute : displayMinute;
        const sec = displaySecond < 10 ? '0' + displaySecond : displaySecond;
        
        timerDisplay.innerText = min + ':' +sec;
        
        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDisplay.innerText = 'Breath Out';

            setTimeout(() =>{
                timerDisplay.innerText = 'Breath In';
                startTimer(timeLeft);
            }, 3000);
        }
    }, 1000);

}

const stopTime = () =>{
    clearInterval(timerInterval);
    timerDisplay.innerText = 'Breath In';
    isRunning = false;
}
startBtn.addEventListener('click', () =>{
    if (!isRunning) {
        timeLeft = 30;
        startTimer(timeLeft);
        isRunning = true;
    }
})

stopBtn.addEventListener('click', () =>{
    stopTime();
    isRunning = false;
})