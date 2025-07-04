import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import React from 'react';
import { balloonDisplayData } from './PackageData';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Helmet } from 'react-helmet-async';

export default function BalloonDisplays() {
	return (
		<Box
			component='main'
			id='balloon_displays'
			aria-label='Balloon Display At Ansom Events'>
			<Helmet>
				<title>Ansom Events - Event Packages for Every Budget</title>
				<meta
					name='description'
					content='Discover our event packages, from luxury setups to budget-friendly options. We provide tailored event décor in Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event packages, event decor, Cornwall, Devon, weddings, parties'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Statement Balloon Designs For Every Occasion'
				/>
				<meta
					property='og:description'
					content='Explore our customizable event packages, perfect for weddings, parties, and corporate events.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/packages' />
				<link rel='canonical' href='https://ansomevents.com/packages' />
			</Helmet>
			<PageTitle
				pageHeader={'Balloon Displays'}
				pageSubheader={'Statement Balloon Designs For Every Occasion'}
				smallSubheaderOnMobile
			/>
			<LayoutWrapper>
				<Box>
					<Typography component={'p'} variant='titleText'>
						Our bespoke balloon displays are the perfect way to make your event
						stand out. From elegant garlands to playful stacks and striking
						installations, we tailor each design to suit your theme and space.
						Ideal for weddings, parties, and special occasions of all kinds!
					</Typography>
				</Box>
				<Grid container spacing={4} marginBlock={2}>
					{balloonDisplayData.map((x, index) => (
						<Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
							<Card
								sx={{
									alignItems: 'stretch',
									height: '100%', // Ensures all cards match height
									backgroundColor: theme.palette.primaryBackground.secondary,
									paddingBlock: 1,
								}}>
								{/* Image Section */}
								<CardMedia
									component='img'
									image={x.image}
									alt={x.alt}
									title={x.title}
									loading='lazy'
									sx={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '8px',
										paddingInline: 3,
									}}
								/>
								{/* Content Section */}
								<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											component={'h3'}
											variant='productTitle'
											sx={{ whiteSpace: 'normal', textAlign: 'center' }}>
											{x.title}
										</Typography>
										<Typography
											component={'p'}
											variant='smallerP'
											sx={{ marginBlock: 1 }}>
											{x.description}
										</Typography>
										<Typography
											component={'p'}
											variant='titleText'
											sx={{ textAlign: 'center' }}>
											Starting from £{x.price}
										</Typography>
									</CardContent>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
