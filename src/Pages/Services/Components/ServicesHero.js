import React from 'react';

export default function ServicesHero({ title, text }) {
	return (
		<div className='services-hero'>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
}
