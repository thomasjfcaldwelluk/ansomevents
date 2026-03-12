import React from 'react';
import { Box, Typography } from '@mui/material';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function Gallery() {
	return (
		<PageWrapper id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<SectionWrapper>
				<PageTitle
					pageHeader={'Ansom Events Gallery'}
					pageSubheader={'Our Work'}
				/>
				<Box>
					<Typography>Hello World</Typography>
				</Box>
			</SectionWrapper>
		</PageWrapper>
	);
}
