import React from 'react';

export default function ServicesCard({ title, text, icon }) {
	return (
		<div className='services-card'>
			<h3>{title}</h3>
			<p>{text}</p>
			<p>{icon}</p>
		</div>
	);
}
