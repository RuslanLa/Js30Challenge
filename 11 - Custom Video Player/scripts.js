function togglePlay() {
  const video = getVideoElement(this);
  video[video.paused ? "play" : "pause"]();
}
function updateButton() {
  this.classList.toggle("playing");
}

function getVideoElement(el) {
  return el.parentElement.parentElement.querySelector("video");
}

function skip() {
  const skipValue = this.dataset.skip;
  const video = getVideoElement(this);
  video.currentTime += parseFloat(skipValue);
}

function handleRangeUpdate() {
  const video = getVideoElement(this);
  video[this.name] = parseFloat(this.value);
}

const updateProgressBar = (progressBar, percent) =>
  (progressBar.style.flexBasis = `${percent}%`);
function handleProgress() {
  const progressBar = this.parentElement.querySelector(".progress__filled");
  const percent = this.currentTime / this.duration * 100;
  updateProgressBar(progressBar, percent);
}
function scrub(e) {
  const progressBar = this.querySelector(".progress__filled");
  const percent = e.offsetX / this.offsetWidth;
  const video = getVideoElement(this);
  video.currentTime = percent * video.duration;
}
document.querySelectorAll(".player__button").forEach(button => {
  button.addEventListener("click", togglePlay);
});

document.querySelectorAll(".player__button[data-skip]").forEach(button => {
  button.addEventListener("click", skip);
});

document.querySelectorAll("video").forEach(video => {
  video.addEventListener(
    "click",
    togglePlay.bind(video.parentElement.querySelector(".player__button"))
  );
  const updateButtonHandler = updateButton.bind(
    video.parentElement.querySelector(".player__button")
  );
  video.addEventListener("play", updateButtonHandler);
  video.addEventListener("pause", updateButtonHandler);
  video.addEventListener("timeupdate", handleProgress);
});

document.querySelectorAll(".player__slider").forEach(range => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});

document.querySelectorAll(".progress").forEach(progress => {
  let mouseDown = false;
  progress.addEventListener("click", scrub);
  const scrubBound = scrub.bind(progress);
  progress.addEventListener("mousemove", (e)=>mouseDown && scrubBound(e));
  progress.addEventListener("mousedown", () => (mouseDown = true));
  progress.addEventListener("mouseup", () => (mouseDown = false));
});
