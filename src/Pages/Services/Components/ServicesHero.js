import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import { Typography } from '@mui/material';
import HeroImage from 'Components/ui/Image/HeroImage';

export default function ServicesHero({ title, text, description, image }) {
	return (
		<SectionWrapper id='services-hero' variant='light'>
			<PageTitle pageHeader={title} pageSubheader={text} />
			<HeroImage src={image} title={title} />
			<CenterBox>
				<Typography variant='body1'>{description}</Typography>
			</CenterBox>
		</SectionWrapper>
	);
}
