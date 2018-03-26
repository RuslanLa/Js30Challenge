(function() {
  const panels = document.querySelectorAll(".panel");
  function open() {
    this.classList.toggle("open");
  }
  function openActive(e) {
    if(e.propertyName !== 'font-size') return;
    this.classList.toggle("open-active");
  }
  panels.forEach(panel => panel.addEventListener("click", open));
  panels.forEach(panel => panel.addEventListener("transitionend", openActive));
})();
