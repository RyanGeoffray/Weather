window.addEventListener('load', async ()=> {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      const long = position.coords.longitude;
      const lat = position.coords.latitude;

      updateDOM(await fetchWeatherData(lat, long));
    })
  }
    //const api2 = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  //function setIcons (icon, iconID){
    //const skycons = new skycons({color: 'white'});
    //const currentIcon = weatherIcon.replace(/-/g, "_")

});


function updateDOM(weatherData) {
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let icon = document.querySelector('.icon');

  const{description, weatherIcon} = data.weather[0];
  const{temp_max} = data.main;
  const{name} = data;
  //set DOM elements from API
  temperatureDegree.textContent = temp_max;
  temperatureDescription.textContent = description;
  locationTimezone.textContent = name;
  // icon.backgroundImage = //Heres an edit
}

async function fetchWeatherData(lat, long) {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=dd088661d976220ba9d4d12cf3d1d70c`;

      try {
        const data = await (await fetch(api)).json();
        return data;
      } catch (error) {
        console.error(`Error fetching weather data: ${error}`);
      }
}
