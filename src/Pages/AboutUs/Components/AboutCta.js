import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutCta({ id, title, primaryBtn, secondaryBtn }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<h2>{title}</h2>
			<button>{primaryBtn.text}</button>
			<button>{secondaryBtn.text}</button>
		</SectionWrapper>
	);
}
