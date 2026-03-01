import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function DecorHero({ variant }) {
	return (
		<SectionWrapper id='decor-hero' variant={variant}>
			<PageTitle pageHeader='Decor' pageSubheader='Get it here' />
		</SectionWrapper>
	);
}
