const theme = document.querySelector("#themeButton");

let index = 1;
const color = ["dark", "light", "solar"];
theme.addEventListener("click", () => {
  getTheme();
});

function getTheme(save = false) {
  document.body.className = `${color[index]}`;
  localStorage.setItem("index", index);

  index++;
  if (index > color.length - 1) index = 0;
}

if (localStorage.getItem("index") != null) {
  let i = localStorage.getItem("index");
  index = +i;
  document.body.className = `${color[i]}`;
  index++;
  if (index > color.length - 1) index = 0;
}
