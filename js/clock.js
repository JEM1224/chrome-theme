const clock = document.querySelector("h2#clock");
var hours;
var minutes;
var seconds;
function mouseDownHandler() {
  clock.innerText = "저기..지금..몇시야???";
}
function mouseOverHandler() {
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
function getClock() {
  const date = new Date();
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");
  seconds = String(date.getSeconds()).padStart(2, "0");
}
getClock();
setInterval(getClock, 1000);

clock.addEventListener("mouseleave", mouseDownHandler);
clock.addEventListener("mouseover", mouseOverHandler);
