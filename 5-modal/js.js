const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});
