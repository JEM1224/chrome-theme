const API_KEY = "c6071b80cf5156637379545d8732e4e3";

function onGeoOk(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })
  );

  console.log(url);
}
function onGeoError() {
  alert("Can't find you, no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
