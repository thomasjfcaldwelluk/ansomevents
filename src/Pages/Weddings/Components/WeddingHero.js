import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import HeroImage from 'Components/ui/Image/HeroImage';

export default function WeddingHero({ title, subtitle, image }) {
	return (
		<SectionWrapper id='wedding-hero' variant='light'>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
			<HeroImage src={image} alt={title} />
		</SectionWrapper>
	);
}
