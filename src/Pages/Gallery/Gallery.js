import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import GalleryHero from './Components/GalleryHero';
import galleryData from 'Data/Pages/GalleryData';
import ctaData from 'Data/Pages/ctaData';
import GalleryGrid from './Components/GalleryGrid';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';

export default function Gallery() {
	return (
		<PageWrapper id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<GalleryHero {...galleryData.heroData} />
			<GalleryGrid galleryImages={galleryData.galleryGridData} />
			<CallToActSection {...ctaData.gallery} variant='dark' />
		</PageWrapper>
	);
}
