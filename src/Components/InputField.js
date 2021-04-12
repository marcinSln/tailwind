import React, { useState, useEffect } from 'react';

export function InputField({ options, typeOfElement = 'input', type = 'text', name }) {
	return typeOfElement === 'input' ? (
		<input name={name} className="input" type={type} placeholder={name} />
	) : typeOfElement === 'select' ? (
		<select className="input bg-white text-gray " name={name}>
			{options.map((item) => {
				{
					return (
						<option key={item.name} value={item.value}>
							{item.value}
						</option>
					);
				}
			})}
		</select>
	) : typeOfElement === 'textarea' ? (
		<textarea name={name} className="my-4 md:my-6 input w-full" placeholder={name} rows="10" />
	) : null;
}
