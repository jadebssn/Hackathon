import { DateTime } from "luxon";
import "./Flight.css";

function Flight(props) {
  return (
    <div className="flight">
      <div className="departureinfo">
        <p className="city">{props.cityCodeFrom} </p>
        <p className="time">
          {DateTime.fromMillis(props.dTime * 1000).toLocaleString(
            DateTime.TIME_SIMPLE
          )}{" "}
        </p>
      </div>
      <div className="arrivalinfo">
        <p className="city">{props.flyTo} </p>
        <p className="time">
          {DateTime.fromMillis(props.aTime * 1000).toLocaleString(
            DateTime.TIME_SIMPLE
          )}{" "}
        </p>
      </div>

      <p className="price">{props.price} EUR</p>
    </div>
  );
}
export default Flight;
