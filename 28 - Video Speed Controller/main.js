const speedController = document.querySelector(".speed");
const bar = speedController.querySelector(".speed-bar");
const video = document.querySelector(".flex");
const isDown = false;
const minValue = 0.4;
const max = 4;
speedController.addEventListener("mousemove", function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + "%";
  bar.style.height = height;
  const playbackRate = percent * (max - minValue) + minValue;
  bar.textContent = `${Math.round(playbackRate * 10) / 10}x`;
  video.playbackRate = playbackRate;
});
speedController.addEventListener("mousedown", function(e) {});
