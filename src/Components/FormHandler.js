import React, { Component } from 'react';
import emailjs, { init } from 'emailjs-com';
import { email } from '../Config/Config';
import Toastr from './Toastr';

export class FormHandler extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showToastr: false,
			messageToastr: '',
			statusToastr: ''
		};
	}

	handleSubbmit = (e) => {
		e.preventDefault();
		init(email.userID);

		let data = [],
			inputs = e.target,
			isEmpty =
				inputs['Name'].value &&
				inputs['Email'].value &&
				inputs['Phone#'].value &&
				inputs['Budget'].value &&
				inputs['Message'].value
					? false
					: true;

		console.log('isEmpty', isEmpty);
		if (!isEmpty) {
			this.setState({
				showToastr: true,
				statusToastr: 'success',
				messageToastr: 'Wiadomość wysłana'
			});
			emailjs.sendForm(email.ServiceID, email.TemplateID, inputs, email.userID).then(
				(result) => {
					console.log(result);
				},
				(error) => {
					console.log(error);
				}
			);
		} else {
			this.setState({
				showToastr: true,
				statusToastr: 'error',
				messageToastr: 'Uzupełnij dane'
			});
		}

		setTimeout(() => {
			this.setState({ showToastr: false });
		}, 5000);
	};

	render() {
		let { statusToastr, messageToastr, showToastr } = this.state;
		console.log('rest', this.state);
		return (
			<form
				onSubmit={(e) => {
					this.handleSubbmit(e);
				}}
				className={this.props.className}
			>
				{this.props.children}

				<Toastr showToastr={showToastr} statusToastr={statusToastr} messageToastr={messageToastr} />
			</form>
		);
	}
}
