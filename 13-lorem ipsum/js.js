const form = document.querySelector("form");
const text = document.querySelector(".text");
const amount = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = +amount.value;
  let random = Math.floor(Math.random() * data.length);
  if (isNaN(value) || value < 0 || value > 9 || !value) {
    text.innerHTML = `[RANDOME]: ${data[random]}`;
    console.log("object");
  } else {
    text.innerHTML = `[PARAGRAPH #${value}]: ${data[value]}`;
  }
});

//copy
document.querySelector(".copy").addEventListener("click", () => {
  navigator.clipboard.writeText(text.innerText);
  document.querySelector(".alert").classList.add("active");
  setTimeout(() => {
    document.querySelector(".alert").classList.remove("active");
  }, 500);
});
