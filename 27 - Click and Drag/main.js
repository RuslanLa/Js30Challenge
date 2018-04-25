const slider = document.querySelector(".items");
let isDown = false;

let startX;
let scrollLeft;
const addSliderListener = slider.addEventListener;

const changeActive = isActive =>
  slider.classList[isActive ? "add" : "remove"]("active");

addSliderListener("mousedown", e => {
  isDown = true;
  changeActive(true);
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(e.pageX);
});
addSliderListener("mouseleave", () => {
  isDown = false;
  changeActive(false);
});
addSliderListener("mouseup", () => {
  isDown = false;
  changeActive(false);
});
addSliderListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  console.log(isDown);
  console.log(e);
  slider.scrollLeft = scrollLeft + (startX - e.pageX) * 2;
});
