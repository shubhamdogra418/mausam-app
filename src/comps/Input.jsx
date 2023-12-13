import React, {useContext} from "react";
import { useWeather } from "../context/Weather";

const Input =()=> {
   const weather= useWeather();
//    console.log(weather);
   
    return (
        <div >
            <input className="input"
            placeholder= "Enter city"
            value= {weather.searchCity}
            onChange={(e)=> weather.setSearchCity(e.target.value)}
            />
        </div>
    )
}

export default Input;