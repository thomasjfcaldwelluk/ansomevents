import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function AboutPreview({ title, subtitle, description, cta }) {
	return (
		<SectionWrapper id='about-us-preview'>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<p>{description}</p>
			<a href={cta.link}>{cta.label}</a>
		</SectionWrapper>
	);
}
