import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function WeddingHero({ title, subtitle, image }) {
	return (
		<SectionWrapper id='wedding-hero' variant='light'>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
		</SectionWrapper>
	);
}
