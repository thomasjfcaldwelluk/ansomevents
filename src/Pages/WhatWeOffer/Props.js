import { Box, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Grid';
import { addOnData } from './PackageData';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function Props() {
	return (
		<Box
			component='main'
			id='props_to_hire'
			aria-label='Props To Hire At Ansom Events'>
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
			<PageTitle
				pageHeader={'Prop Hire'}
				pageSubheader={'Chic, versatile props for unforgettable setups.'}
				smallSubheaderOnMobile
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Enhance your event with our stunning add-on décor! From elegant
					peacock chairs to stylish props, custom signs, and so much more, we
					have the perfect extras to complete your setup.
				</Typography>
				<Grid container sx={{ marginBlock: 4 }} spacing={2}>
					{addOnData.map((pkg, index) => (
						<Grid item key={index} size={{ xs: 12, sm: 6, md: 3 }}>
							<Box sx={{ backgroundColor: '#F2EFEA', padding: 2 }}>
								<Box>
									<img
										src={pkg.image}
										alt={pkg.alt}
										width='100%'
										height='100%'
									/>
								</Box>
								<Box>
									<Typography component={'h3'} variant='productTitle'>
										{pkg.title}
									</Typography>
									<Typography component={'h5'} variant='titleText'>
										£{pkg.price}
									</Typography>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
