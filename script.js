

window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let icon = document.querySelector('.icon');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=dd088661d976220ba9d4d12cf3d1d70c`;

      //const pic = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      fetch(api)
        //fetch(pic)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const { description, weatherIcon } = data.weather[0];
          const { temp_max } = data.main;
          const { name } = data;
          //set DOM elements from API
          temperatureDegree.textContent = temp_max;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = name;
          //icon.backgroundImage = 
      })
    });
    //const api2 = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    //function setIcons (icon, iconID){
    //const skycons = new skycons({color: 'white'});
    //const currentIcon = weatherIcon.replace(/-/g, "_")
  }
});