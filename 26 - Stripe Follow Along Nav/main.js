const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown");
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();
  background.style.left = `${dropdownCords.left - navCords.left}px`;
  background.style.top = `${dropdownCords.top - navCords.top}px`;
  background.style.width = `${dropdownCords.right - dropdownCords.left}px`;
  background.style.height = `${dropdownCords.bottom - dropdownCords.top}px`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach(trigger => {
  trigger.addEventListener("mouseenter", handleEnter);
  trigger.addEventListener("mouseleave", handleLeave);
});
