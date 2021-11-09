const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const counter = document.querySelector(".counter");
let count = 0;
decrease.addEventListener("click", () => {
  count--;
  check();
  counter.textContent = count;
});
increase.addEventListener("click", () => {
  count++;
  check();
  counter.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  counter.style.color = "#000";
});

function check() {
  if (count < 0) {
    counter.style.color = "orangered";
  } else {
    counter.style.color = "#000";
  }
}
