import React from 'react'
const Weather = (props) =>{   
    let tempC = props.state.temp-273.15
    return(
        <div>
            {console.log(props.state)}
            <h1>Weather for {props.state.city}</h1>
            <h3>Temprature {tempC}deg cesius</h3>
            <h3>co-ordinates  <p>Longitude: {props.state.lon}, Latitude: {props.state.lat}</p> </h3>
            <h3>Pressure {props.state.pressure}</h3>
            <h3>Humidity {props.state.humidity}%</h3>
            <h3>Clouds {props.state.clouds}%</h3>
            <h3>Wind Speed {props.state.wind_speed}m/s</h3>
        </div>
    )
}
export default Weather;