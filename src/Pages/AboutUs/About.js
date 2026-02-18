import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutCta from './Components/AboutCta';
import AboutHero from './Components/AboutHero';
import AboutLocations from './Components/AboutLocations';
import AboutStory from './Components/AboutStory';
import AboutTeam from './Components/AboutTeam';
import AboutWhy from './Components/AboutWhy';
import aboutData from '../../Data/Pages/aboutData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function About() {
	return (
		<Box component={'main'} id='about_us' aria-label='About Ansom Events'>
			<PageWrapper>
				<Typography variant='h1' component='h2' align='center' gutterBottom>
					About Us
				</Typography>
				<AboutHero {...aboutData.hero} />
				<AboutStory {...aboutData.story} />
				<AboutTeam {...aboutData.team} />
				<AboutWhy {...aboutData.why} />
				<AboutLocations {...aboutData.locations} />
				<AboutCta {...aboutData.cta} />
			</PageWrapper>
		</Box>
	);
}
