import React from 'react';

export default function AboutCta({ title, primaryBtn, secondaryBtn }) {
	return (
		<div>
			<h2>{title}</h2>
			<button>{primaryBtn.text}</button>
			<button>{secondaryBtn.text}</button>
		</div>
	);
}
