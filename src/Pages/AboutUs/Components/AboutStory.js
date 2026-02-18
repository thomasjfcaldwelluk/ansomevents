import React from 'react';

export default function AboutStory({ title, paragraph }) {
	return (
		<div>
			<h2>{title}</h2>
			{paragraph.map((text, index) => (
				<p key={index}>{text}</p>
			))}
		</div>
	);
}
