let all_h1 = document.querySelectorAll("h1");

all_h1.forEach((item, index) => {
    
  if (index % 2 == 0) {
    item.classList.add("even");

    // item.style.background="red";
    //item.style.color="red";
    //  item.style.boxShadow=" 0 0 0 0 0";

  } 
  else {
    item.classList.add("odd");
    item.innerHTML = "ood number - " + index;
  }
});

// q2
let oneTxt = document.getElementById("one").textContent;
let towTxt = document.getElementById("tow").textContent;

document.getElementById("one").innerHTML = towTxt;
document.getElementById("tow").innerHTML = oneTxt;
