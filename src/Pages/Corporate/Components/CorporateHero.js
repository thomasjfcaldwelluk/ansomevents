import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import HeroImage from 'Components/ui/Image/HeroImage';

export default function CorporateHero({
	title,
	subtitle,
	primaryCta,
	secondaryCta,
	image,
	id,
}) {
	return (
		<SectionWrapper id={id} variant='light'>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
			<HeroImage src={image} />
		</SectionWrapper>
	);
}
