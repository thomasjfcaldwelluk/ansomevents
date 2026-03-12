import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function ServicesHero({ title, text }) {
	return (
		<SectionWrapper id='services-hero' variant='light'>
			<PageTitle pageHeader={title} pageSubheader={text} />
		</SectionWrapper>
	);
}
