function Dropdown(props) {
    const changeValue = (e) => {
        props.setCity(e.target.value)
        console.log(e.target.value)
        
    }
    
    const changeDeparture = (e) => {
        props.setDeparture(e.target.value)
        console.log(e.target.value)
    }
        
    
    return (
        <>
        
        <select name="selectList" id="selectList" onChange={changeDeparture}>
           <option value="PRG">Prague</option>
           <option value="BER">Berlin</option>
           <option value="WAW">Warsaw</option>
           <option value="PED">Pardubice</option>
        </select>
            
        <select name="selectList" id="selectList" onChange={changeValue}>
           <option value="VLC">Valencia</option>
           <option value="BCN">Barcelona</option>
           <option value="MAD">Madrid</option>
           <option value="MXP">Milano</option>
           <option value="ATH">Athens</option>
        </select>

        </>
            


        
    )
}

export default Dropdown;

