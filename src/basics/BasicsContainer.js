import React, {Component} from 'react';
import Button from './Button';
import Textbox from './Textbox';
import DatePicker from './DatePicker';
import Passwordfield from './Passwordfield';
import Textarea from './Textarea';
import Range from './Range';
import Dropdown from './Dropdown';

const countries = [
	{value: 'nor', label: 'Norway'},
	{value: 'swe', label: 'Sweden'},
	{value: 'fin', label: 'Finland'},
	{value: 'us'}
  ];

export class BasicContainer extends Component{
	state = {
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		userName: '',
		password: '',
		notes: '',
		reactLevel: '0',
		country: ''
    }
    onButtonClick = () => {
		console.log(this.state);
		this.setState({
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			userName: '',
			password: '',
			notes: '',
			reactLevel: '0',
			country: ''
		});
	}
	onTextBoxChange = (key, newInputText) => {
		this.setState({
			[key]: newInputText
		});
	}
	render(){
		return (
			<table>
				<tbody>
					<tr>
						<td>
						<Textbox 
							value={this.state.firstName} 
							onChange={this.onTextBoxChange.bind(undefined, 'firstName')}
							placeholder="Fornavn" 
						/>
						</td>
					</tr>
					<tr>
						<td>
						<Textbox
							value={this.state.lastName}
							onChange={this.onTextBoxChange.bind(undefined, 'lastName')}
							placeholder="Etternavn"
						/>
						</td>
					</tr>
					<tr>
						<td>
						<DatePicker
							value={this.state.dateOfBirth}
							onChange={this.onTextBoxChange.bind(undefined, 'dateOfBirth')}
							placeholder="Fødselsdato"
						/>
						</td>
					</tr>
					<tr>
						<td>
						<Textbox
							value={this.state.userName}
							onChange={this.onTextBoxChange.bind(undefined, 'userName')}
							placeholder="Brukernavn"
						/>
						</td>
					</tr>
					<tr>
						<td>
						<Passwordfield
							value={this.state.password}
							onChange={this.onTextBoxChange.bind(undefined, 'password')}
							placeholder="Passord"
						/>
						</td>
					</tr>
					<tr>
						<td>
						<Textarea
							value={this.state.notes}
							onChange={this.onTextBoxChange.bind(undefined, 'notes')}
							placeholder="Notater"
						/>
						</td>
					</tr>
					<tr>
						<td>
						<Range
							value={this.state.reactLevel}
							onChange={this.onTextBoxChange.bind(undefined, 'reactLevel')}
							placeholder="Kjennskap til react"
							minVal="1"
							maxVal="10"
						/>
						</td>
					</tr>
					<tr>
						<td>
							<Dropdown options={countries} value={this.state.country} onChange={this.onTextBoxChange.bind(undefined, 'country')}/>
						</td>
					</tr>
					<tr>
						<td>
						<Button 
							onClick={this.onButtonClick} 
							nrOfClicks = {this.state.nrOfClicks}
							title="Title prop val">
							Children Hello world
						</Button>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
export default BasicContainer;