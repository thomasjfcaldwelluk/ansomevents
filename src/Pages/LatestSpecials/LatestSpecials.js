import React from 'react';
import PageTitle from '../../ReuseableComponents/PageTitle.js';
import Grid from '@mui/material/Grid2';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import theme from './../../theme.js';

const LatestSpecials = () => {
	return (
		<Box
			component='main'
			className='Ansom_Events_Latest_Specials'
			sx={{
				backgroundColor: theme.palette.primaryBackground.main,
				justifyContent: 'center',
				height: '100vh',
			}}>
			<Helmet>
				<title>Baby Shower Package £200 | Ansom Events Special Offer</title>
				<meta
					name='description'
					content='Celebrate in style with our Baby Shower Package for just £200! Includes balloon garland, décor, personalized welcome sign, and more. Book now!'
				/>
				<meta
					name='keywords'
					content='baby shower package, baby shower decorations, balloon garland, event planning Cornwall, baby shower props, baby shower setup, Ansom Events'
				/>
				<meta
					property='og:title'
					content='Baby Shower Package £200 | Limited-Time Special'
				/>
				<meta
					property='og:description'
					content='Get our stunning Baby Shower Package for just £200! Includes sailboard or balloon hoop, Oh Baby sign, garland, centerpiece, and more. Book today!'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/baby-shower-package.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/latest-specials/baby-shower-package'
				/>
				<link
					rel='canonical'
					href='https://ansomevents.com/latest-specials/baby-shower-package'
				/>
			</Helmet>
			<Grid component={'section'} container spacing={4} padding={3}>
				<PageTitle
					pageHeader='Easter Special'
					pageSubheader='Order Yours Today!'
				/>
			</Grid>
		</Box>
	);
};

export default LatestSpecials;
