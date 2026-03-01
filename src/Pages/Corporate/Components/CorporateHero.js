import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';

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
			<PageTitle
				pageHeader='Corporate Events'
				pageSubheader='Business & Networking'
			/>
			<a href={primaryCta.link}>{primaryCta.label}</a>
			<a href={secondaryCta.link}>{secondaryCta.label}</a>
			<img src={image} alt='Corporate event example' />
		</SectionWrapper>
	);
}
