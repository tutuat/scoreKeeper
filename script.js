const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");

const scoreMaxDisplay = document.getElementById("scoreMaxDisplay");
const scoreMaxInput = document.getElementById("maxScore");

const btnPlayer1 = document.getElementById("btnPlayer1");
const btnPlayer2 = document.getElementById("btnPlayer2");
const btnReset = document.getElementById("btnReset");


let score1 = 0;
let score2 = 0;
let scoreMax = scoreMaxInput.value;

scoreMaxDisplay.textContent = scoreMax;

scoreMaxInput.addEventListener("input", function () {
    scoreMax = this.value;
    scoreMaxDisplay.textContent = scoreMax;
  
});

btnPlayer1.addEventListener("click", function () {
    if (score1 < scoreMax) {
      score1++;
      score1Display.textContent = score1;
    }
});
  
  btnPlayer2.addEventListener("click", function () {
    if (score2 < scoreMax) {
      score2++;
      score2Display.textContent = score2;
    }
});
  