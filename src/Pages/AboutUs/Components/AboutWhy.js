import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutWhy({ id, title, points }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<h2>{title}</h2>
			<ul>
				{points.map((point, index) => (
					<li key={index}>{point}</li>
				))}
			</ul>
		</SectionWrapper>
	);
}
