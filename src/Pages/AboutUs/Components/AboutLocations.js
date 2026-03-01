import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutLocations({ id, title, text }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<h2>{title}</h2>
			<p>{text}</p>
		</SectionWrapper>
	);
}
