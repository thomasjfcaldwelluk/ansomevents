import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function CTA({ title, subtitle, primaryCta }) {
	return (
		<SectionWrapper id='call-to-action'>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<a href={primaryCta.link}>{primaryCta.label}</a>
		</SectionWrapper>
	);
}
