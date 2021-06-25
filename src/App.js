import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Flights from "./components/Flights";
import Dropdown from "./components/Dropdown";


function App() {
  const [flights, setFlights] = useState([]);
  const [city, setCity] = useState('');
  const affilId = "data4youcbp202106";
  async function fetchAll() {
    const resp = await fetch(
      `https://api.skypicker.com/flights?fly_from=PRG&fly_to=${city}&date_from=26/6/2021&date_to=29/6/2021&partner=${affilId}&limit=5&direct_flights=0`
    );
    const data = await resp.json();
    console.log(data);
    setFlights(data.data);
  }
  useEffect(() => {
    city && 
    fetchAll();
  }, [city]);

  return (
    <div className="App">
      <Dropdown setCity={setCity}/>
      <Flights flights={flights} />
    </div>
  );
}

export default App;
