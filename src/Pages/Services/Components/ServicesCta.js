import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function ServicesCta({ title, text, buttonText, buttonLink }) {
	return (
		<SectionWrapper id='services-call-to-action' variant='light'>
			<h2>{title}</h2>
			<a href={buttonLink}>{buttonText}</a>
		</SectionWrapper>
	);
}
