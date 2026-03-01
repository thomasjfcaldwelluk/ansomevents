import { Box } from '@mui/material';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function GalleryPreview() {
	return (
		<SectionWrapper id='gallery-preview' variant='light'>
			<SectionHeader sectionHeader={'See Our Gallery'} />
		</SectionWrapper>
	);
}
