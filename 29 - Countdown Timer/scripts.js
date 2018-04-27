const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const form = document.querySelector("#custom");
const customMinutes = form.querySelector("[name='minutes']");
const timer = (function() {
  let interval;
  return seconds => {
    if (interval) {
      clearInterval(interval);
    }
    const now = Date.now();
    const then = now + seconds * 1000;
    displayEndTime(then);
    displayTimeLeft(seconds);
    interval = setInterval(function() {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(interval);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  };
})();

function displayTimeLeft(seconds) {
  seconds = Math.abs(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const displayTime = joinTimeParts(minutes, remainderSeconds);
  timerDisplay.textContent = displayTime;
  document.title = displayTime;
  console.log(Math.abs(seconds));
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const displayTime =
    "timer will end at " +
    joinTimeParts(end.getHours(), end.getMinutes(), end.getSeconds());
  endTime.textContent = displayTime;
}

function addLeadingZeros(inp) {
  return inp.toString().padStart(2, "0");
}
function joinTimeParts(...parts) {
  return parts.map(p => addLeadingZeros(p)).join(":");
}

document.querySelectorAll(".timer__button").forEach(b =>
  b.addEventListener("click", function(e) {
    const time = b.dataset.time;
    if (!time) return;
    timer(parseInt(time));
  })
);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const minutes = parseInt(customMinutes.value);
  if (isNaN(minutes)) {
    return;
  }
  timer(minutes * 60);
});
