
const API_key = "3ec77581799218a8534c31f41598f3f4";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then((data)=>{
    console.log(data.name)
    const weatherContainer = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child"); 
    city.innerText = data.name
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`

  })
}

function onGeoError(){
   alert("Can not find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError) 



