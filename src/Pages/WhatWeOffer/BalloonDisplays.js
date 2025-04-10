import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import React from 'react';
import { balloonDisplayData } from './PackageData';
import Grid from '@mui/material/Grid2';
import theme from '../../theme';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function BalloonDisplays() {
	return (
		<Box
			component='main'
			id='balloon_displays'
			aria-label='Balloon Display At Ansom Events'>
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
				<Grid container rowSpacing={4} columnSpacing={2} marginBlock={3}>
					{balloonDisplayData.map((x, index) => (
						<Grid
							item
							size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
							key={index}
							sx={{ display: 'flex', justifyContent: 'center' }}>
							<Card
								sx={{
									width: '310px',
									alignItems: 'stretch',
									height: '100%', // Ensures all cards match height
									padding: '0.5 1',
									backgroundColor: theme.palette.primaryBackground.secondary,
								}}>
								{/* Image Section */}
								<CardMedia
									component='img'
									image={x.image}
									alt={x.title}
									sx={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '8px',
									}}
								/>
								{/* Content Section */}
								<Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											component={'h6'}
											variant='titleText'
											sx={{ whiteSpace: 'normal' }}>
											{x.title}
										</Typography>
										<Typography component={'p'} variant='p'>
											{x.price}
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
