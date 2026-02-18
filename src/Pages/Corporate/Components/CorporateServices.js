import React from 'react';

export default function CorporateServices({ title, items }) {
	return (
		<section aria-label={title}>
			<h2>{title}</h2>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</section>
	);
}
