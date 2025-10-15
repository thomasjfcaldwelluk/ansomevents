import React from 'react';
import { List, ListItem, Box, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import { backdropData } from './PackageData';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Helmet } from 'react-helmet-async';

export default function Backdrops() {
	return (
		<Box component='main' id='backdrops' aria-label='Backdrops At Ansom Events'>
			<Helmet>
				<title>
					Event Backdrops & Hoop Designs for Hire in Cornwall & Devon
				</title>
				<meta
					name='description'
					content='Hire the perfect event backdrop! We offer shimmer, fringe, classic plain white, and stunning full or half hoop designs available for collection in Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event backdrop hire Cornwall, shimmer wall rental Devon, fringe backdrop, wedding hoop design, classic photo backdrops'
				/>
				<link
					rel='canonical'
					href='https://ansomevents.com/whatweoffer/backdrops'
				/>
				<meta
					property='og:title'
					content='Shimmer Walls & Hoop Backdrops for Hire | Ansom Events'
				/>
				<meta property='og:type' content='product' />
				<meta
					property='og:description'
					content='Browse our range of stunning event backdrops, including shimmer walls, fringe designs, and elegant floral hoops for your next party.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/backdrop-hero-image.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/whatweoffer/backdrops'
				/>
			</Helmet>
			<PageTitle
				pageHeader={'Backdrops & Hoop Designs'}
				pageSubheader={'Great Photo Ops For Your Event'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					If you’re looking for just a backdrop, we’ve got you covered! Choose
					from shimmer, fringe, or classic plain white. We also offer hoop
					designs—full or half—for a stunning event feature!
				</Typography>
				<Grid container spacing={3} marginBlock={2}>
					{backdropData.map((pkg, index) => (
						<Grid key={index} item size={{ xs: 12, md: 4 }}>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									backgroundColor: '#F2EFEA',
									padding: 2,
									borderRadius: 4,
								}}>
								{/* Image */}
								<Box
									component={'img'}
									src={pkg.image}
									alt={pkg.alt}
									sx={{ width: '100%', borderRadius: 2, mb: 2 }}
								/>

								{/* Content Section */}
								<Box sx={{ flexGrow: 1 }}>
									<Typography component='h3' variant='h4'>
										{pkg.title}
									</Typography>
									<Typography component='p' variant='p'>
										{pkg.description}
									</Typography>
									<List>
										{pkg.included.map((item, itemIndex) => (
											<ListItem key={itemIndex} sx={{ py: 0 }}>
												<Typography
													component='p'
													variant='p'
													sx={{ fontWeight: 600 }}>
													- {item}
												</Typography>
											</ListItem>
										))}
									</List>
								</Box>

								{/* Price (at bottom) */}
								<Typography component='h5' variant='titleText' sx={{ mt: 2 }}>
									{pkg.price}
								</Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
