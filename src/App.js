import Head from "./components/Head";
import Weather from "./components/Weather";
import { useWeather } from "./context/WeatherContext"

function App() {
  const {loading} = useWeather()

  return (
    <div className="App">
      {loading && <h2 className="loading">weather is loading...</h2>}
      {!loading && <Head />}
      {!loading && <Weather />}
    </div>
  );
}

export default App;