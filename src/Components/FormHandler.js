import React, { Component } from 'react';

export class FormHandler extends Component {
	render() {
		return <form className={this.props.className}>{this.props.children}</form>;
	}
}
