import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import galleryData from '../../../Data/Pages/GalleryData';
import GalleryGrid from 'Pages/Gallery/Components/GalleryGrid';

export default function GalleryPreview() {
	const { galleryGridData } = galleryData;
	const previewImages = galleryGridData.slice(0, 6);
	return (
		<SectionWrapper id='gallery-preview' variant='light' padding={0}>
			<SectionHeader sectionHeader={'See Our Gallery'} />
			<GalleryGrid galleryImages={previewImages} />
		</SectionWrapper>
	);
}
