const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHoleIndex;
let score = 0;
let timeUp = false;

function randTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomHole(holes) {
  const indexes = Array.from({ length: holes.length }, (v, i) => i).filter(
    i => i != lastHoleIndex
  );
  const holeIndex = indexes[Math.floor(randTime(0, indexes.length))];
  const hole = [...holes][holeIndex];
  lastHoleIndex = holeIndex;
  return hole;
}

function popupMoles() {
  const time = randTime(200, 3000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (timeUp) {
      return;
    }
    popupMoles();
  }, time);
}

function incrementScore() {
  score++;
  scoreBoard.textContent = score;
}

moles.forEach(m => {
  m.addEventListener("click", e => {
    if (!e.isTrusted) return;
    incrementScore();
    m.parentElement.classList.remove("up");
  });
});

function startGame() {
  score = 0;
  timeUp = false;
  popupMoles();
  setTimeout(() => {
    timeUp = true;
  }, 30000);
}
