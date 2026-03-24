import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import GalleryHero from './Components/GalleryHero';
import galleryData from 'Data/Pages/GalleryData';
import GalleryGrid from './Components/GalleryGrid';

export default function Gallery() {
	return (
		<PageWrapper id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<GalleryHero {...galleryData.heroData} />
			<GalleryGrid galleryImages={galleryData.galleryGridData} />
		</PageWrapper>
	);
}
