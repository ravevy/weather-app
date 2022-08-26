import { createContext, useState, useEffect, useContext } from "react"
import axios from "axios";
import config from "../config.js"

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const [data, setData] = useState("")
  const [cord, setCord] = useState({lat: 41.06, lon: 28.99}) 
  const [city, setCity] = useState()
  const [loading, setLoading] = useState(true)


  const api = config.API_TOKEN
 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      function(position) {
        if(position){
          setCord({lat: position.coords.latitude.toFixed(2), lon: position.coords.longitude.toFixed(2) })
        }
      });
  }, [])

  useEffect(() => {
    if(city){
    setLoading(true)
    axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${api}&units=metric&lang=tr`)
    .then(res => setData(res.data))
    .catch(e => alert("Hatalı arama yaptınız."))
    .finally(()=>{setLoading(false)})
    }
    else{
    axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${cord.lat}&lon=${cord.lon}&cnt=7&appid=${api}&units=metric&lang=tr`)
    .then(res => setData(res.data))
    .catch(e => console.log(e))
    .finally(()=>{setLoading(false)})
    } 
  }, [cord, city])

  const values = {data, setData, cord, setCord, loading, setLoading, city, setCity}
 
  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)
