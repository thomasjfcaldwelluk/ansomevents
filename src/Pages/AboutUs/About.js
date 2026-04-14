import React from 'react';
import AboutHero from './Components/AboutHero';
import AboutStory from './Components/AboutStory';
import AboutTeam from './Components/AboutTeam';
import AboutWhy from './Components/AboutWhy';
import aboutData from '../../Data/Pages/aboutData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ctaData from '../../Data/Pages/ctaData';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import SEO from 'Components/SEO';

export default function About() {
	return (
		<PageWrapper id='about_us' aria-label='About Ansom Events'>
			<SEO
				title='About Us - Ansom Events'
				description='Learn more about Ansom Events and our commitment to creating unforgettable experiences for your special occasions.'
				url='https://www.ansomevents.com/about-us'
				image='https://www.ansomevents.com/og-image.jpg'
			/>

			<AboutHero {...aboutData.hero} />
			<AboutStory {...aboutData.story} />
			<AboutTeam {...aboutData.team} />
			<AboutWhy {...aboutData.why} />
			{/* <AboutLocations {...aboutData.locations} /> */}
			<CallToActSection {...ctaData.about} />
		</PageWrapper>
	);
}
