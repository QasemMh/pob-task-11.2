document.querySelector("#date").innerHTML = new Date().getFullYear();

const nav = document.querySelector("nav");

window.onscroll = () => {
  if (window.scrollY == 0 && !window.matchMedia("(max-width: 500px)").matches) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
};

window.onresize = () => {
  nav.classList.contains("show") ? nav.classList.remove("show") : "";
};


const links = document.querySelectorAll(".nav__link");
const menu = document.querySelector(".menu");
menu.onclick = () => {
  nav.classList.toggle("show");
  nav.classList.add("active");
};

links.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});
