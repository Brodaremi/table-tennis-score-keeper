const p1 = document.querySelector("#p1Display");
const p2 = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
const p1Name = document.querySelector("#p1Name");
const p2Name = document.querySelector("#p2Name");
const winMsg = document.createElement("p");
const left = document.querySelector(".buttons")

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
winningScore = 3;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
    }
    if (p1Score===winningScore) {
        isGameOver = true;
        p1Button.style.backgroundColor = 'green';
        p2Button.style.backgroundColor = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
        winMsg.style.color = "white";
        winMsg.style.textAlign = "center";
        if (p1Name.value === "") {
            winMsg.textContent = `Player1 Wins the Game`;
        }else {
            winMsg.textContent = `${p1Name.value} Wins the Game`;
        }
        winMsg.style.alignSelf = 'center'
        left.before(winMsg);
    }
    p1Display.textContent = p1Score;
})


p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
    }
    if (p2Score===winningScore) {
        isGameOver = true;
        p2Button.style.backgroundColor = 'green';
        p1Button.style.backgroundColor = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
        winMsg.style.color = "white";
        winMsg.style.textAlign = "center";
        if (p2Name.value === "") {
            winMsg.textContent = `Player2 Wins the Game`;
        }else {
            winMsg.textContent = `${p2Name.value} Wins the Game`;
        }    
        left.before(winMsg);
    }
    p2Display.textContent = p2Score;
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Button.style.backgroundColor = '';
    p1Button.style.backgroundColor = '';
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Name.value = "";
    p2Name.value = "";
    winMsg.textContent = '';
}

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt (this.value);
    reset();
})