import React from 'react';

export default function AboutWhy({ title, points }) {
	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{points.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</div>
	);
}
