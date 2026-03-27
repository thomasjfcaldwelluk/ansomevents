import React from 'react';
import SEO from '../../Components/SEO';
import Hero from '../../Components/Sections/Hero/Hero';
import Features from '../../Components/Sections/Features/Features';
import AboutPreview from '../../Components/Sections/AboutPreview/AboutPreview';
import GalleryPreview from '../../Components/Sections/GalleryPreview/GalleryPreview';
import homeData from '../../Data/Pages/homeData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import Testimonials from 'Components/Sections/Testimonials/Testimonials';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import ctaData from '../../Data/Pages/ctaData';

export default function Home() {
	return (
		<PageWrapper id='home' aria-label='home'>
			<SEO
				title='Home — Ansom Events'
				description='We create amazing events & décor in Cornwall.'
				url='https://www.ansomevents.com'
				image='https://www.ansomevents.com/og-image.jpg'
			/>
			<Hero {...homeData.hero} />
			<Features {...homeData.features} />
			<AboutPreview {...homeData.about} />
			<GalleryPreview />
			<CallToActSection {...ctaData.home} />
			<Testimonials {...homeData.testimonials} />
		</PageWrapper>
	);
}
