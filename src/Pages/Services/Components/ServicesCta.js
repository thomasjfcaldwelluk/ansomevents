import React from 'react';

export default function ServicesCta({ title, text, buttonText, buttonLink }) {
	return (
		<div className='services-cta'>
			<h2>{title}</h2>
			<a href={buttonLink}>{buttonText}</a>
		</div>
	);
}
