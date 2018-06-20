import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getWeather}>
			<h3>Enter your city and country:</h3>
				<input type='text' name='city' placeholder='City, example: Odessa' />
				<input type='text' name='country' placeholder='Country, example: Ua' />
				<button>Show Weather</button>
			</form>
		)
	}
}
export default Form;