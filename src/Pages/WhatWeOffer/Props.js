import { Box, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Grid2';
import { addOnData } from './PackageData';

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
			<Typography variant='h4' component={'h4'} sx={{ textAlign: 'center' }}>
				Add On Decor
			</Typography>
			<Typography
				variant='introText'
				component={'p'}
				sx={{ width: '90%', margin: '0 auto' }}>
				Enhance your event with our stunning add-on décor! From elegant peacock
				chairs to stylish props, custom signs, and so much more, we have the
				perfect extras to complete your setup.
			</Typography>
			<Grid container sx={{ marginBlock: 4 }} spacing={2}>
				{addOnData.map((pkg, index) => (
					<Grid
						item
						key={index}
						size={{ xs: 12, sm: 6, md: 3 }}
						sx={{ backgroundColor: '#F2EFEA', padding: 2 }}>
						<Grid container sx={{ display: 'flex' }} spacing={1}>
							<Grid item width={'40%'}>
								<img src={pkg.image} alt={pkg.alt} width='100%' height='100%' />
							</Grid>
							<Grid item>
								<Typography component={'h5'} variant='h5'>
									{pkg.title}
								</Typography>
								<Typography component={'h5'} variant='h6'>
									£{pkg.price}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
