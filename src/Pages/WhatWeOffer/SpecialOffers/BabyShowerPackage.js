import React from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';
import Grid from '@mui/material/Grid';

import babyShowerSpecial from '../../../Assets/Photos/Specials/babyShowerSpecial.webp';
// import babyBingo from '../../../Assets/Photos/Specials/babyBingo.webp';
// import babyBoxes from '../../../Assets/Photos/Specials/Babyboxes.webp';
// import easel from '../../../Assets/Photos/Specials/easel.webp';

export default function BabyShowerPackage() {
	return (
		<Box>
			<Grid
				container
				spacing={2}
				sx={{
					alignItems: 'stretch',
					flexWrap: { xs: 'wrap', md: 'nowrap' },
				}}>
				{/* Left Image Column */}
				<Grid item size={{ xs: 12, md: 5, lg: 4 }}>
					<Box
						component='img'
						src={babyShowerSpecial}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 4,
						}}
					/>
				</Grid>

				{/* Right Content Column */}
				<Grid item size={{ xs: 12, md: 7, lg: 9 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							backgroundColor: '#F2EFEA',
							height: '100%',
							borderRadius: 4,
							padding: { xs: 1, md: 3, lg: 5 },
						}}>
						<Typography
							component='h2'
							variant='productTitle'
							sx={{ textAlign: 'center', mb: 2, fontSize: 17 }}>
							Baby Shower Package
						</Typography>

						{/* Included Items */}
						<List sx={{ paddingLeft: 2 }}>
							{[
								'Sailboard',
								'Oh Baby sign',
								'Balloon garland in your theme colours (biodegradable latex)',
								'Baby box with balloons for gift table',
								'Easel with faux florals & personalised sign',
								'Cake Pedestal',
								'Choice of 2 baby shower games (Up to 20 players)*',
							].map((value, i) => (
								<ListItem key={i} sx={{ py: 0.5 }}>
									<Typography component={'p'} variant='p'>
										• {value}
									</Typography>
								</ListItem>
							))}
						</List>

						{/* Price */}
						<Box sx={{ textAlign: 'center', my: 2 }}>
							<Typography variant='titleText'>£200</Typography>
						</Box>

						{/* Disclaimer */}
						<Typography component='p' variant='smallerP' sx={{ mb: 2 }}>
							*Game options: Baby Bingo, Name That Baby Song, Don't Say "Baby",
							Baby Word Search, and Guess the Safety Pin Count
						</Typography>
					</Box>
					{/* Title */}
				</Grid>
			</Grid>
		</Box>
	);
}
