import React from 'react';
import { Box, Typography } from '@mui/material';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function Gallery() {
	return (
		<PageWrapper id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<PageTitle
				pageHeader={'Ansom Events Gallery'}
				pageSubheader={'Our Work'}
			/>
			<Box>
				<Typography>Hello World</Typography>
			</Box>
		</PageWrapper>
	);
}
