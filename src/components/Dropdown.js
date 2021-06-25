import "./Dropdown.css";

function Dropdown(props) {
  const changeValue = (e) => {
    props.setCity(e.target.value);
    console.log(e.target.value);
  };

  const changeDeparture = (e) => {
    props.setDeparture(e.target.value);
    console.log(e.target.value);
  };



  return (
    <>
      <h1>Hello world!</h1>
      <div>
        <label htmlFor="selectList">Departure </label>
        <select
          className="dropdown"
          name="selectList"
          id="selectList"
          onChange={changeDeparture}
        >
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </select>
      </div>
      <div>
        <label htmlFor="selectList">Destination</label>
        <select
          className="dropdown"
          name="selectList"
          id="selectList"
          onChange={changeValue}
        >
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </select>
      </div>

      <label htmlFor="flights">Direct flights only</label>
      <input
        type="checkbox"
        checked={props.directFlights}
        onChange={() => props.setDirectFlights(!props.directFlights)}
      />
    </>
  );
}

export default Dropdown;
