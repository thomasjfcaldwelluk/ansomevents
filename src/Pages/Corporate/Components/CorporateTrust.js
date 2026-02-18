import React from 'react';

export default function CorporateTrust({ items }) {
	return (
		<section aria-label='Why Choose Us'>
			<h2>Why Choose Us</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</section>
	);
}
