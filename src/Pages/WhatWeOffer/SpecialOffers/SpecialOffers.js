import React from 'react';
import PageTitle from '../../../ReuseableComponents/PageTitle.js';
import Grid from '@mui/material/Grid2';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import theme from '../../../theme.js';
import BabyShowerPackage from './BabyShowerPackage.js';
import LayoutWrapper from '../../../ReuseableComponents/LayoutWrapper.js';

export default function SpecialOffers() {
	return (
		<Box
			component='main'
			id='special_offers'
			aria-label='Special Offers At Ansom Events'>
			<Helmet>
				<title>Ansom Events - Special Offers on Event Packages</title>
				<meta
					name='description'
					content='Check out our latest special offers on event packages, decor hire, and more. Available in Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event discounts, special offers, event packages, Cornwall, Devon'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Special Offers on Event Packages'
				/>
				<meta
					property='og:description'
					content='Grab exclusive deals on event packages and decor hire today!'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/special-offers'
				/>
				<link rel='canonical' href='https://ansomevents.com/special-offers' />
			</Helmet>
			<PageTitle pageHeader='Latest Special' pageSubheader='At Ansom Events' />
			<LayoutWrapper>
				<BabyShowerPackage />
			</LayoutWrapper>
		</Box>
	);
}
