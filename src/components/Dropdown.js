function Dropdown(props) {
    const changeValue = (e) => {
        props.setCity(e.target.value)
        console.log(e.target.value)
   }
    
    return (
        <select name="selectList" id="selectList" onChange={changeValue}>
        <option value="VLC">Valencia</option>
        <option value="BCN">Barcelona</option>
        <option value="MAD">Madrid</option>
        <option value="MXP">Milano</option>
        <option value="ATH">Athens</option>
        </select>
    )
}

export default Dropdown;

