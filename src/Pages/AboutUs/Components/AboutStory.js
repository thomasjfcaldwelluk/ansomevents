import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function AboutStory({ id, title, paragraph }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<h2>{title}</h2>
			{paragraph.map((text, index) => (
				<p key={index}>{text}</p>
			))}
		</SectionWrapper>
	);
}
