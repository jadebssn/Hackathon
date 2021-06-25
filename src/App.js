import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Flights from "./components/Flights";
import Dropdown from "./components/Dropdown";


function App() {
  const [flights, setFlights] = useState([]);
  const [city, setCity] = useState('');
  const [departure, setDeparture] = useState('');
  const [directFlights, setDirectFlights] = useState(false);

  const affilId = "data4youcbp202106";

  async function fetchAll() {
    const resp = await fetch(
      `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${city}&date_from=26/6/2021&date_to=29/6/2021&partner=${affilId}&limit=20&direct_flights=${directFlights}&offset=2`
    );
    const data = await resp.json();
    console.log(data);
    setFlights(data.data);
  }
  useEffect(() => {
    city && departure && fetchAll();
  }, [city, departure, directFlights]);

  return (
    <div className="App">
      <BrowserRouter>
        <Dropdown
          setCity={setCity}
          setDeparture={setDeparture}
          setDirectFlights={setDirectFlights}
          directFlights={directFlights}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              flights.length > 0 ? <Flights flights={flights} /> : "No flights"
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
