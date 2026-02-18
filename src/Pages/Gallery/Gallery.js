import React from 'react';
import { Box, Typography } from '@mui/material';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Gallery() {
	return (
		<Box component='main' id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<PageWrapper>
				<Typography variant='h1' component='h2' align='center' gutterBottom>
					Gallery
				</Typography>
				<Box>
					<Typography>Hello World</Typography>
				</Box>
			</PageWrapper>
		</Box>
	);
}
