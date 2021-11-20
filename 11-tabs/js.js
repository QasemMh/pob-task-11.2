const content = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  let type = e.target.dataset.id;

  console.log(e.target);
  if (type) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    content.forEach((item) => {
      item.classList.remove("active");
    });

    document.getElementById(type).classList.add("active");
  }
});
