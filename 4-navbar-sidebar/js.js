//navbar
const bars = document.querySelector(".menu");
const menu = document.querySelector(".nav__links");

bars.addEventListener("click", () => {
  changeStatus();
});

window.onresize = () => {
  if (menu.classList.contains("active")) {
    changeStatus();
  }
};

function changeStatus() {
  menu.classList.toggle("active");
}

//side bars
const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".side__menu");
showSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  showSidebar.classList.toggle("active");
});
