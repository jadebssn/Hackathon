import Flight from "./Flight";

function Flights(props) {
  return (
    <>
      {props.flights.map((flight, i) => (
        <Flight
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
