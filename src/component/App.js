import React, { Component } from 'react';
import Form from './Form'
import Weather from './Weather'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city:'',
      lat:'',
      lon:'',
      weather:'',
      temp:'',
      pressure:'',
      humidity:'',
      wind_speed:'',
      clouds:'',
    }
  }
  apiKey ='0df3515324da5772acf0416b1ac655d5'

  getWeather = (e,city,country)=> {
    e.preventDefault()
    const  url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiKey}`;
    fetch(url)
      .then(response=> response.json())
      .then(myJson =>{
      //  console.log(myJson)
       this.setState({
        city:myJson.name,
        lat:myJson.coord.lat,
        lon:myJson.coord.lon,
        weather:myJson.weather[0].main,
        temp:myJson.main.temp,
        pressure:myJson.main.pressure,
        humidity:myJson.main.humidity,
        wind_speed:myJson.wind.speed,
        clouds:myJson.clouds.all,
       })
      });
  }

  render() { 
    // console.log(this.state)
    return (
    <div className="container">
      <h3>Mausam</h3> 
      <Form getWeather={this.getWeather}/>
      {this.state.city!== "" && <Weather state={this.state}/>}
    </div>
    )
  }
}

export default App;
