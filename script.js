const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("slide");
  menu.classList.toggle("out");
}
