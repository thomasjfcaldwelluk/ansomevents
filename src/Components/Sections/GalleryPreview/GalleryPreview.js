import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import galleryData from '../../../Data/Pages/GalleryData';
import GalleryGrid from 'Pages/Gallery/Components/GalleryGrid';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function GalleryPreview({ title, intro, cta }) {
	const { galleryGridData } = galleryData;
	const previewImages = galleryGridData.slice(0, 6);
	return (
		<SectionWrapper id='gallery-preview' variant='dark'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GalleryGrid galleryImages={previewImages} disablePadding={true} />
			<CenterBox>
				<Button variant='light' component={Link} to={cta.href}>
					{cta.label}
				</Button>
			</CenterBox>
		</SectionWrapper>
	);
}
