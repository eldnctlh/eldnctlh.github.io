import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import Cities from './components/cities'

const API_KEY = 'a4c005786d5b1cdf2c84cdbb2c1fc38f';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
       this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Enter the city and country.'
      });
    }
  }
  getWeatherPrev = async (e) => {
    e.preventDefault();
    const citycountry = e.target.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citycountry}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(citycountry) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
       this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Enter the city and country.'
      });
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='title'><Titles /></div>
        <div className='content'>
          <div className='cities-list'><Cities getWeatherPrev = {this.getWeatherPrev}/></div>
          <div className='weather-container'>
            <div className='form'><Form getWeather={this.getWeather}/></div>
            <div className='weather'>
            <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
             />
         </div>
          </div>
        </div>
      </div>
    )
  }
};
export default App;
