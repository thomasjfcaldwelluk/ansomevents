import React from 'react';
import ServicesCard from './ServicesCard';

export default function ServicesList({ services }) {
	return (
		<div className='services-list'>
			{services.map((service) => (
				<ServicesCard key={service.id} {...service} />
			))}
		</div>
	);
}
