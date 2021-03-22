import React, { Component } from 'react';
import emailjs, { init } from 'emailjs-com';
import { email } from '../Config/Config';

export class FormHandler extends Component {
	handleSubbmit = (e) => {
		e.preventDefault();
		init(email.userID);

		let data = [],
			inputs = e.target;

		emailjs.sendForm(email.ServiceID, email.TemplateID, inputs, email.userID).then(
			(result) => {
				console.log(result);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	render() {
		return (
			<form
				onSubmit={(e) => {
					this.handleSubbmit(e);
				}}
				className={this.props.className}
			>
				{this.props.children}
			</form>
		);
	}
}
