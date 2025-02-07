import React from 'react';
import { LatestSpecialsContainer } from './LatestSpecialsStyles.js';
import PageTitle from '../../ReuseableComponents/PageTitle.js';
import Grid from '@mui/material/Grid2';
import { Helmet } from 'react-helmet-async';
import Valentines from './Valentines.js';

const LatestSpecials = () => {
	return (
		<LatestSpecialsContainer
			component='main'
			className='Ansom_Events_Latest_Specials'>
			<Helmet>
				<title>
					Valentine’s Day Special: Balloon Stack & 6 Cupcakes for Only £20!
				</title>
				<meta
					name='description'
					content='Get the perfect Valentine’s Day gift in Cornwall! A beautiful balloon stack and 6 delicious cupcakes for just £20. Order now from Ansom Events!'
				/>
				<meta
					name='keywords'
					content='Valentine’s Day gift Cornwall,Affordable Valentine’s gifts, Valentines present for girlfriend, cheap but special valentines gift, valentines near plymouth, valentines deal'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Full-Service Event Planning'
				/>
				<meta
					property='og:description'
					content='We specialize in event coordination and design across Cornwall and Devon.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com' />
				<link rel='canonical' href='https://ansomevents.com/decorpackages' />
			</Helmet>
			<Grid
				component={'section'}
				container
				spacing={4}
				sx={{
					padding: 3,
				}}>
				<PageTitle
					pageHeader='Valentine’s Day Special'
					pageSubheader='Order Yours Today!'
				/>
				<Valentines />
			</Grid>
		</LatestSpecialsContainer>
	);
};

export default LatestSpecials;
