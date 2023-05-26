import React, { useState } from "react";
import Buttons from "./UI/button/Buttons";
import DisplayWeather from "./DisplayWeather";
import "../Style/Weather.css";

function Weather() {

    const api = '478a4acc980d7033f5db6e9637f33ad4';
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: "",
      });

    async function weatherData(e) {
        e.preventDefault();
        if (form.city === "") {
          alert("Add values");
        } else {
          const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${api}`
          )
            .then((res) => res.json())
            .then((data) => data);
    
          setWeather({ data: data });
        }
      }

   

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city"){
            setForm({ ...form, city: value});
        }
        if (name === "country"){
            setForm({ ...form, country: value});
        }

        console.log(form.city, form.country);
    };
   
    return (
        <div className="container_weather">
            <div className="weather">
                <span className="title">Weather in Your City</span>
                <br/>

                <form>
                    <input type="text" name="city" placeholder="City" onChange={e => handleChange(e)}/>
                    &nbsp;
                    <input type="text" name="country" placeholder="Country" onChange={e => handleChange(e)}/>
                    <Buttons onClick={e => weatherData(e)}>Submit</Buttons>
                </form>

                {weather.data !== undefined ? (
                    <div>
                    <DisplayWeather data={weather.data} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}
export default Weather;