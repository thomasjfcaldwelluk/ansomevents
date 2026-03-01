import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutHero({ id, title, text }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<h1>{title}</h1>
			<p>{text}</p>
		</SectionWrapper>
	);
}
