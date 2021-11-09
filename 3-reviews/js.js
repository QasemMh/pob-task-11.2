const img = document.querySelector(".person-photo");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const count = document.querySelector(".counter");
//set starting item
let current = 0;

window.addEventListener("DOMContentLoaded", () => {
  getSlide(current);
});

function getSlide(index) {
  const item = reviews[index];
  img.setAttribute("src", item.imgUrl);
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  count.textContent = item.id;
}
next.addEventListener("click", () => {
  current >= reviews.length - 1 ? (current = 0) : current++;
  getSlide(current);
  console.log(current);
});
prev.addEventListener("click", () => {
  current <= 0 ? (current = reviews.length - 1) : current--;
  getSlide(current);
  console.log(current);
});
randomBtn.addEventListener("click", () => {
  current = Math.floor((Date.now() / 100) % reviews.length);
  getSlide(current);
});
