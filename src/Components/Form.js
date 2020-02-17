import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	
	state = {
		countries: [],
		newUserData: '',
		userData: {
			name: '',
			surname: '',
			country: '',
			birthday: ''	
		}
	}

	async componentDidMount() {
		const url='https://restcountries.eu/rest/v2/all';
		const res = await fetch(url);
		const data = await res.json();
		this.setState({countries: data});
	}

	showNewUserData = (e) => {
		e.preventDefault();
		
	}

	onChange = e => {
		const currentState = this.state.userData;
		const {name, value} = e.target;
		currentState[name] = value;
		this.setState({
			userData:currentState
		})
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.addUser(this.state.userData);
		// console.log(localStorage.getItem('newUserData'));
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var newUserData = "Hello {name} from {Country}. On {day} of {month} you will have {years}."
		newUserData = newUserData.replace('{name}', this.state.userData.name + " " + this.state.userData.surname);
		newUserData = newUserData.replace('{Country}', this.state.userData.country);
		newUserData = newUserData.replace('{day}', dd);
		newUserData = newUserData.replace('{month}', mm);
		newUserData = newUserData.replace('{years}', this.calculateAge(this.state.userData.birthday));
		this.setState({
			newUserData: newUserData
		});
	}

	calculateAge(birthday) {
		var splittedBirthday = birthday.split("/");
		var birthdate = new Date(splittedBirthday[2], splittedBirthday[0], splittedBirthday[1]);
		var ageDifMs = Date.now() - birthdate;
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	 }

	render() {
		return (
			<div className="component" style={{float: "left"}}>
			  <form onSubmit={this.onSubmit}>
			  	<span>Name:</span>
			    <input 
			    	type="text" 
			    	placeholder="name here"
			    	onChange={this.onChange}
			    	name="name"
			    	value={this.state.userData.name}
			    />
			    <br/>
			    <span>Surname:</span>
			    <input 
			    	type="text" 
			    	placeholder="name here" 
			    	onChange={this.onChange} 
			    	name="surname"
			    	value={this.state.userData.surname}
			    />
			    <br/>
			    <span>Countries:</span>
			    <select 
			    	onChange={this.onChange} 
			    	name="country"
			    	value={this.state.userData.country}
			    >
			    	<option default>Countries</option>
			    	{this.state.countries.map((country, index) => {
						return <option key={index}>
							{country.name}
						</option>
					})}
			    </select>
			    <br/>
			    <span>Birthday:</span>
			    <input 
			    	type="text" 
			    	placeholder="mm/dd/yyyy" 
			    	onChange={this.onChange} 
			    	name="birthday"
			    	value={this.state.userData.birthday}
			    />
			    <br/>
			    <button type="submit">Save</button>
			    <br/>
			    <p>{this.state.newUserData}</p>
			  </form>
			</div>
		);
	}
}

export default Form;
