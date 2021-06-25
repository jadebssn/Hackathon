import Flight from "./Flight";

function Flights(props) {

  console.log(props);
  return (
    <>
      {props.flights.map((flight, i) => (
        <Flight
          key={i}
          cityCodeFrom={flight.cityCodeFrom}
          flyTo={flight.flyTo}
          dTime={flight.dTime}
          aTime={flight.aTime}
          price={flight.price}
        />
      ))}
    </>
  );
}
export default Flights;
