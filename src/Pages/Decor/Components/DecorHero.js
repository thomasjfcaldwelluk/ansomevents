import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import HeroImage from 'Components/ui/Image/HeroImage';

export default function DecorHero({ variant, title, subTitle, image }) {
	return (
		<SectionWrapper id='decor-hero' variant={variant}>
			<PageTitle pageHeader={title} pageSubheader={subTitle} />
			<HeroImage src={image} alt={title} />
		</SectionWrapper>
	);
}
