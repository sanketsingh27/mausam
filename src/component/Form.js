import React from 'react'
export default class Form extends React.Component{
        constructor(props){
                super(props);
                this.state ={
                        city:"",
                        country:""
                };
        }
        handleChangeCity =(e)=>{
                this.setState({city:e.target.value})       
        }
        
        handleChangeCountry= (e) =>{
                this.setState({country:e.target.value})
                
        }

        render(){
                let city = this.state.city;
                let country = this.state.country;
                return(
                        <form>
                            <input name='city' value={this.state.city} onChange={this.handleChangeCity} placeholder='city name'/>
                            <input name='country' value={this.state.country}onChange={this.handleChangeCountry} placeholder='country name'/>
                            <button onClick={(e)=>this.props.getWeather(e,city,country)}>Get Weather</button>
                        </form>
                );
        }
}