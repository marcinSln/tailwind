import React, { useState, useEffect } from 'react';

export default function Toastr({ messageToastr, statusToastr, showToastr }) {
	const [ message, setMessage ] = useState(messageToastr);
	const [ status, setStatus ] = useState(statusToastr);
	const [ isVisible, setVisible ] = useState(showToastr);

	useEffect(
		() => {
			setMessage(messageToastr);
		},
		[ messageToastr ]
	);

	useEffect(
		() => {
			setStatus(statusToastr);
		},
		[ statusToastr ]
	);

	useEffect(
		() => {
			setVisible(showToastr);
		},
		[ showToastr ]
	);

	return (
		<div
			className={` toastr toastr--${statusToastr ? statusToastr : null} ${isVisible
				? 'opacity-100'
				: 'opacity-0'} `}
		>
			<div className="toastr__content ">{messageToastr} </div>
		</div>
	);
}
