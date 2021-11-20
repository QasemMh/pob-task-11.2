let hourItem = document.querySelector(".hours");
let minItem = document.querySelector(".mins");
let secsItem = document.querySelector(".secs");
let dayItem = document.querySelector(".days");

const countDate = new Date("jan 1,2022 00:00:00").getTime();

function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second, minute, hour, day, d, h, m, s;

  second = 1000;
  minute = second * 60;
  hour = minute * 60;
  day = hour * 24;

  //d,h,m,w >> future date
  d = Math.floor(gap / day);
  h = Math.floor((gap % day) / hour);
  m = Math.floor((gap % hour) / minute);
  s = Math.floor((gap % minute) / second);

  //add to html
  hourItem.innerHTML = h;
  minItem.innerHTML = m;
  secsItem.innerHTML = s;
  dayItem.innerHTML = d;

  if (gap < 0) {
    clearInterval(timer);
    document.querySelector(".deadline").innerHTML = "<h2>Happy New Year</h2>";
  }
}

const timer = setInterval(() => {
  newYear();
}, 1000);
