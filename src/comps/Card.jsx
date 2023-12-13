import React from "react";
import { useWeather } from "../context/Weather";

const Card=()=> {
    const weather= useWeather();
    return (
        <div className="card">
            <h1>Daily Weather ForeCast</h1>   
            <img src={weather?.data?.current?.condition?.icon}/>
            <h2> {weather?.data?.current?.condition?.text}</h2>
            <h2> {weather?.data?.current?.temp_c}° C {weather?.data?.location?.localtime}</h2>
            <h3 className="name"> {weather?.data?.location?.name}, {weather?.data?.location?.region}, <i class="fa-solid fa-globe"></i> { weather?.data?.location?.country} </h3>
        </div>
    )
}

export default Card;