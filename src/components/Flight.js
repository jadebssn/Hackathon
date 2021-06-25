import { DateTime } from "luxon";
import "./Flight.css";

function Flight(props) {
  return (
    <div className="flight">
      <p className="city">{props.cityCodeFrom} </p>
      <p className="time">{DateTime.fromMillis(props.dTime * 1000).toFormat("hh:mm")} </p>
      <p className="city">{props.flyTo} </p>
      <p className="time">{DateTime.fromMillis(props.aTime * 1000).toFormat("hh:mm")} </p>

      <p className="price">{props.price} EUR</p>
    </div>
  );
}
export default Flight;
