// API Key: e849834b76364e7481c152915230508
// e849834b76364e7481c152915230508
// e849834b76364e7481c152915230508;
// http://api.weatherapi.com/v1/current.json?key=<e849834b76364e7481c152915230508>&q=London
// http://api.weatherapi.com/v1/forecast.json?key=<e849834b76364e7481c152915230508>&q=07112&days=7
// http://api.weatherapi.com/v1/search.json?key=e849834b76364e7481c152915230508&q=london
// http://api.weatherapi.com/v1/forecast.json?key=e849834b76364e7481c152915230508&q=07112&days=7
// var searchBox = document.getElementById("searchBox");
// var cityName = searchBox.value;
var find = document.getElementById("find");
var data;
var temp = "";
var d = new Date().toDateString();
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayName = days[dayOfWeek];
console.log(dayName);
async function getWeather(a) {
  var result = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e849834b76364e7481c152915230508&q=${a}&days=3`
  );
  var a = await result.json();
  console.log(a);
  temp += `
  <div class="box">
  <div class="head d-flex justify-content-between p-2 fst-italic">
    <div class="day">${dayName}</div>
    <div class="date">${d}</div>
  </div>
  <div class="data mx-4">
    <div class="city fs-4 mt-4">${a.location.name}</div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="temptcher fs-1 fw-bolder">${a.current.temp_c}<sup>o</sup>C</div>
      <img class="w-25" src="${a.current.condition.icon}" alt="icon" />
    </div>
    <div class="status">${a.current.condition.text}</div>
    <div class="icons d-flex justify-content-around mt-5 mb-3">
      <div class="huew fs-4">
        <i class="fa-solid fa-umbrella"></i> ${a.current.humidity}%
      </div>
      <div class="wind fs-4">
        <i class="fa-solid fa-wind"></i> ${a.current.wind_kph} Km/h
      </div>
      <div class="loca fs-4">
        <i class="fa-regular fa-compass"></i> East
      </div>
    </div>
  </div>
</div>
`;
  document.getElementById("searchBox").addEventListener("keyup", (a) => {
    getWeather(a.target.value);
  });
  document.getElementById("toDay").innerHTML = temp;
}
getWeather("landon");
