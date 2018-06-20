import React from 'react';

class Cities extends React.Component {
	render() {
		return (
			<div>
			<h3>Cities List (clickable):</h3>
					<button value='Odessa, Ua' onClick={this.props.getWeatherPrev}>Odessa</button>
					<button value='Kyiv, Ua' onClick={this.props.getWeatherPrev}>Kyiv</button>
					<button value='Lviv, Ua' onClick={this.props.getWeatherPrev}>Lviv</button>
					<button value='Kharkiv, Ua' onClick={this.props.getWeatherPrev}>Harkiv</button>
					<button value='Dnipropetrovsk, Ua' onClick={this.props.getWeatherPrev}>Dnipropetrovsk</button>
					<button value='Vinnytsia, Ua' onClick={this.props.getWeatherPrev}>Vinnytsia</button>
					<button value='Donetsk, Ua' onClick={this.props.getWeatherPrev}>Donetsk</button>
					<button value='Zhytomyr, Ua' onClick={this.props.getWeatherPrev}>Zhytomyr</button>
					<button value='Zaporizhzhia, Ua' onClick={this.props.getWeatherPrev}>Zaporizhzhia</button>
					<button value='Ivano-Frankivsk, Ua' onClick={this.props.getWeatherPrev}>Ivano-Frankivsk</button>
					<button value='Kirovohrad, Ua' onClick={this.props.getWeatherPrev}>Kirovohrad</button>
					<button value='Luhansk, Ua' onClick={this.props.getWeatherPrev}>Luhansk</button>
					<button value='Lutsk, Ua' onClick={this.props.getWeatherPrev}>Lutsk</button>
					<button value='Mykolaiv, Ua' onClick={this.props.getWeatherPrev}>Mykolaiv</button>
					<button value='Poltava, Ua' onClick={this.props.getWeatherPrev}>Poltava</button>
					<button value='Rivne, Ua' onClick={this.props.getWeatherPrev}>Rivne</button>
					<button value='Sumy, Ua' onClick={this.props.getWeatherPrev}>Sumy</button>
			</div>
		)
	}
}
export default Cities;