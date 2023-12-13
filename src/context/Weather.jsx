import React, {useContext, useState} from "react";
import { createContext } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

export const WeatherContext= createContext(null);

//making cutsom hook
export const useWeather =()=> {
    return useContext(WeatherContext);
}

//all these props will be available in whole project
export const WeatherProvider =(props)=> {
//hooks always inside the functional components
    const[data, setData]= useState(null);
    const [searchCity, setSearchCity]= useState("");

    const fetchData = async () => {
        const res= await getWeatherDataForCity(searchCity);
        setData(res);
    }

    const fetchDataForLocation =() => {
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => setData(data))
        })
        // console.log(position);
    }
    return (
        //making the available
        <WeatherContext.Provider value={{data, searchCity, fetchData, setSearchCity,fetchDataForLocation }}> 
            {props.children}
        </WeatherContext.Provider>
    )
}
