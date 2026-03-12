import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function ContactHero({ title, subtitle }) {
	return (
		<SectionWrapper id='contact-hero' aria-label='Contact Hero Section'>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
		</SectionWrapper>
	);
}
