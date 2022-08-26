import {useWeather} from "../context/WeatherContext"

function Weather(){
  const { data } = useWeather()

  const weeklyWeather = data.list.map((data) => (
    {max: data.main.temp_max.toFixed(0) + "°",
    min: data.main.temp_min.toFixed(0) + "°",
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }))

  const date = new Date();
  let days = ["Paz", "Pzt", "Sal", "Çrş", "Per", "Cum", "Cmt"]
  days = days.slice(date.getDay(), days.length).concat(days.slice(0, date.getDay()))

  return (
    <>
    <ul className="week">
      {weeklyWeather.map((data, index)=>{
        return <li key={index}>
          <p>{days[index]}</p>
          <img src={data.icon} alt="weather descriptipn"/>
          <p>{data.max}<span>{data.min}</span></p>
          </li>
      })}
    </ul>
    </>
  )

}

export default Weather