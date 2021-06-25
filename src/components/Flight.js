import { DateTime } from "luxon";

function Flight(props) {
  return (
    <div>
      {props.cityCodeFrom}
      {DateTime.fromMillis(props.dTime * 1000).toFormat("hh:mm")}
      {props.flyTo}
      {DateTime.fromMillis(props.aTime * 1000).toFormat("hh:mm")}

      <p>{props.price} EUR</p>
    </div>
  );
}
export default Flight;
