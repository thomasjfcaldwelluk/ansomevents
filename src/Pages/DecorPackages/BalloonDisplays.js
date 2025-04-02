import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import React from 'react';
import { balloonDisplayData } from './PackageData';
import Grid from '@mui/material/Grid2';
import theme from '../../theme';

export default function BalloonDisplays() {
	return (
		<Box sx={{ backgroundColor: theme.palette.primaryBackground.main }}>
			<Grid container rowSpacing={4} columnSpacing={2}>
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
								padding: 1,
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
										variant='p'
										component={'h6'}
										sx={{ whiteSpace: 'normal' }}>
										{x.title}
									</Typography>
									<Typography variant='subtitle1' color='primary'>
										{x.price}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
