const clock = document.querySelector("h2#clock");
var hours;
var minutes;
var seconds;
var flag;

function mouseDownHandler() {
  flag = 1;
}
function mouseOverHandler() {
  flag = 0;
}

function getClock() {
  const date = new Date();
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");
  seconds = String(date.getSeconds()).padStart(2, "0");
  if (flag === 0) {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  } else {
    clock.innerText = "저기..지금..몇시야???";
  }
}

getClock();
setInterval(getClock, 1000);
clock.addEventListener("mouseleave", mouseDownHandler);
clock.addEventListener("mouseover", mouseOverHandler);
