const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const rgb = document.querySelector("#rgb");
const hex = document.querySelector("#hex");
let status = false;
rgb.addEventListener("click", () => {
  status = false;
});
hex.addEventListener("click", () => {
  status = true;
});

//load data from local storage
if (localStorage.getItem("setting") != null) {
  let setting = JSON.parse(localStorage.getItem("setting"));
  status = setting.theStatus;
  document.body.style.background = setting.color;
  color.textContent = setting.color;
}
//on click
btn.addEventListener("click", () => {
  const randomColor = status ? randomHexColor() : randomRgbColor();
  document.body.style.background = randomColor;
  color.textContent = randomColor;

  let setting = {
    color: randomColor,
    theStatus: status,
  };
  svaeToLocalStorage(setting);
});

//hexa
function randomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//rgb
function random(number) {
  return Math.floor(Math.random() * number);
}
function randomRgbColor() {
  return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

function svaeToLocalStorage(value) {
  localStorage.setItem("setting", JSON.stringify(value));
}

color.onclick = copyColor;
document.addEventListener("keyup", function (event) {
  if (event.code.toLowerCase() == "enter") {
    copyColor();
  }
});

function copyColor() {
  navigator.clipboard.writeText(color.textContent);
  alert("color copied | " + color.textContent);
}
