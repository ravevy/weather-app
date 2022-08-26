import {useState} from "react"

import {useWeather} from "../context/WeatherContext"

function Head(){
  const { data, setCity } = useWeather()
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCity(value)
  }

  return <>
    <div className="head">
      <p className="header">{data.city.name}, {data.city.country}</p>
      <form onSubmit={handleSubmit}>
        <input className="search" type="text" placeholder="Şehrini aratabilirsin..." value={value} onChange={handleChange}/>
      </form>
    </div>
  </>
}


export default Head