import logo from './logo.svg';
import './App.css';
import Card from './comps/Card';
import Input from './comps/Input';
import Button from './comps/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather= useWeather();
  console.log(weather);

  useEffect(()=> {
    weather.fetchDataForLocation()
  },[])
  return (
    <div className="App">
      <h1> Weather Forecast</h1>
      <Input placeholder={"Enter City"}/>
      <Button onClick={weather.fetchData} value={"Search Here"} />
      <Card/>
      <Button value={"Refresh"} />
      
    </div>
  );
}

export default App;
