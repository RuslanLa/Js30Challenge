function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function(...args) {
    const boundFunction = func.bind(this, args);
    const later = function() {
      timeout = null;
      if (!immediate) boundFunction();
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) boundFunction();
  };
}

const sliderImages = document.querySelectorAll(".slide-in");
function mapWithScrolledMark(images) {
  return images.map(sliderImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    return { image: sliderImage, isShown: isHalfShown && isNotScrolledPast };
  });
}
function checkSlide(e) {
  mapWithScrolledMark(Array.from(sliderImages)).forEach(imageWithMark => {
    imageWithMark.image.classList[imageWithMark.isShown ? "add" : "remove"](
      "active"
    );
  });
}

window.addEventListener("scroll", debounce(checkSlide));
