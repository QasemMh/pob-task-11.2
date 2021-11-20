const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  let btn = item.children[1];
  let text = item.children[2];
  btn.addEventListener("click", (e) => {
    text.classList.toggle("hide");
  });
});
