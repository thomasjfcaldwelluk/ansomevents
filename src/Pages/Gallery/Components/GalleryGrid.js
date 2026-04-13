import React from 'react';
import GalleryGridItem from './GalleryGridItem';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function GalleryGrid({ galleryImages, disablePadding }) {
	return (
		<SectionWrapper disablePadding={disablePadding} variant='transparent'>
			<GridLayout
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(auto-fill, minmax(300px, 1fr))',
					},
					gridAutoRows: {
						xs: '280px', // taller rows on mobile
						sm: '220px',
						md: '300px',
					},
					gap: {
						xs: 1.5,
						md: 2,
					},
				}}>
				{galleryImages.map((images) => (
					<GalleryGridItem key={images.id} images={images} />
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
