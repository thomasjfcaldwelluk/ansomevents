import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import GalleryHero from './Components/GalleryHero';
import galleryData from 'Data/Pages/GalleryData';
import ctaData from 'Data/Pages/ctaData';
import GalleryGrid from './Components/GalleryGrid';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import SEO from 'Components/SEO';

export default function Gallery() {
	return (
		<PageWrapper id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<SEO
				title='Gallery - Ansom Events'
				description='Explore our gallery of stunning event setups, showcasing our expertise in creating unforgettable experiences for weddings, corporate events, and more.'
				url='https://www.ansomevents.com/gallery'
				image='https://res.cloudinary.com/djjqsmlei/image/upload/v1774367263/Ansom%20Events/GalleryGrid/Tall4_nu5ygg.webp'
			/>
			<GalleryHero {...galleryData.heroData} />
			<GalleryGrid galleryImages={galleryData.galleryGridData} />
			<CallToActSection {...ctaData.gallery} variant='dark' />
		</PageWrapper>
	);
}
