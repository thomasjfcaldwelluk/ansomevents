import { Box, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Props() {
	return (
		<Box>
			<Helmet>
				<title>Ansom Events - Prop & Decor Hire in Cornwall & Devon</title>
				<meta
					name='description'
					content='Rent stunning event props, backdrops, balloon garlands, and more. Perfect for weddings, parties, and corporate events.'
				/>
				<meta
					name='keywords'
					content='prop hire, decor hire, event styling, Cornwall, Devon, wedding decor'
				/>
				<meta property='og:title' content='Ansom Events - Prop & Decor Hire' />
				<meta
					property='og:description'
					content='Transform your event with our stunning props and decorations for hire.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/prop-decor-hire'
				/>
				<link rel='canonical' href='https://ansomevents.com/prop-decor-hire' />
			</Helmet>
			<Typography></Typography>
		</Box>
	);
}
