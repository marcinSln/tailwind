import React, { useState, useEffect } from 'react';

export function InputField({ options, typeOfElement = 'input', type = 'text', name }) {
	return typeOfElement === 'input' ? (
		<input name={name} className="py-4 px-4 placeholder-gray" type={type} placeholder={name} />
	) : typeOfElement === 'select' ? (
		<select className="py-4 px-4 placeholder-gray text-gray ">
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
		<textarea name={name} className="my-6 py-4 px-4 placeholder-gray w-full" placeholder={name} rows="10" />
	) : null;
}
