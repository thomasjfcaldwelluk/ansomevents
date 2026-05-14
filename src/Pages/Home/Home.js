import React, { lazy, Suspense } from 'react';
import SEO from '../../Components/SEO';
import Hero from '../../Components/Sections/Hero/Hero';
import homeData from '../../Data/Pages/homeData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ctaData from '../../Data/Pages/ctaData';
const Features = lazy(
	() => import('../../Components/Sections/Features/Features'),
);
const AboutPreview = lazy(
	() => import('../../Components/Sections/AboutPreview/AboutPreview'),
);
const GalleryPreview = lazy(
	() => import('../../Components/Sections/GalleryPreview/GalleryPreview'),
);
const Testimonials = lazy(
	() => import('Components/Sections/Testimonials/Testimonials'),
);
const CallToActSection = lazy(
	() => import('Components/Sections/CallToActSection/CallToActSection'),
);

export default function Home() {
	return (
		<PageWrapper id='home' aria-label='home'>
			<SEO
				title='Event Decor & Planning in Cornwall & Devon | Ansom Events'
				description='We create amazing events & décor in Cornwall & Devon.'
				url='https://www.ansomevents.com'
				image='https://www.ansomevents.com/og-image.jpg'
			/>
			<Hero {...homeData.hero} />
			<Suspense fallback={null}>
				<Features {...homeData.features} />
				<AboutPreview {...homeData.about} />
				<GalleryPreview {...homeData.gallery} />
				<CallToActSection {...ctaData.home} />
				<Testimonials {...homeData.testimonials} />
			</Suspense>
		</PageWrapper>
	);
}
