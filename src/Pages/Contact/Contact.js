import React from 'react';
import { Box, Typography } from '@mui/material';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Contact() {
	return (
		<Box component={'main'} id='contact' aria-label='Contact Ansom Events'>
			<PageWrapper>
				<Typography variant='h1' component='h2' align='center' gutterBottom>
					Contact Us
				</Typography>
			</PageWrapper>
		</Box>
	);
}
