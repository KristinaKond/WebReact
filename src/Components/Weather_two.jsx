import React,  { useEffect, useState } from "react";
/*
const api = '478a4acc980d7033f5db6e9637f33ad4';
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');
*/
const Weather = () => {
  
  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  fetch(weatherApi, { signal: this.controllerSignal })
  .then(response => response.json())
  .then(
    (result) => {

      console.log(result);

      const { name } = result;
      const { country } = result.sys;
      const { temp, temp_min, temp_max, feels_like, humidity } = result.main;
      const { description, icon } = result.weather[0];
      const { speed, deg } = result.wind;

      this.setState({
        isLoaded: true,
        weatherData: {
          name,
          country,
          description,
          icon,
          temp: temp.toFixed(1),
          feels_like: feels_like.toFixed(1),
          temp_min: temp_min.toFixed(1),
          temp_max: temp_max.toFixed(1),
          speed,
          deg,
          humidity
        }
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  );
}
 /*
window.addEventListener('load', () => {
 let long;
  let lat;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      fetch(base) .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

        
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(1)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(1)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});
function myFunction() {
    const div = document.getElementById("myDropdown");
   
    div.style.display = div.style.display === 'flex' ? 'none' : 'flex';
}


    return(
    <div className="dropdown">
        <button onClick="myFunction()" className="dropbtn">Show Weather</button>
        <div id="myDropdown" className="dropdown-content">
            <img src="" id="weather-icon"/>
            <div id="location">Unable to Fetch Weather</div>
            <div className="desc">No Information Available.</div>
            <div className="weather">
                <div className="c">Error</div>
                <div className="circle"></div>
                <div className="f">Error</div>
            </div>
            <div className="info">
                <h4>Sunrise: <span className="sunrise">No Information Available</span></h4>
                <h4>Sunset: <span className="sunset">No Information Available</span></h4>
            </div>
        </div>
     </div>
    )
}*/

export default Weather;