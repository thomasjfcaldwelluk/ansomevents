import React from 'react';
import AboutHero from './Components/AboutHero';
import AboutLocations from './Components/AboutLocations';
import AboutStory from './Components/AboutStory';
import AboutTeam from './Components/AboutTeam';
import AboutWhy from './Components/AboutWhy';
import aboutData from '../../Data/Pages/aboutData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ctaData from '../../Data/Pages/ctaData';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';

export default function About() {
	return (
		<PageWrapper id='about_us' aria-label='About Ansom Events'>
			<AboutHero {...aboutData.hero} />
			<AboutStory {...aboutData.story} />
			<AboutTeam {...aboutData.team} />
			<AboutWhy {...aboutData.why} />
			{/* <AboutLocations {...aboutData.locations} /> */}
			<CallToActSection {...ctaData.about} />
		</PageWrapper>
	);
}
