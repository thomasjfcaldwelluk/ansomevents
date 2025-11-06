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
						alt='Baby Shower Package Special'
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
							sx={{ textAlign: 'center', mb: 2, fontSize: 25 }}>
							Celebrating Package Special
						</Typography>

						{/* Included Items */}
						<List sx={{ paddingLeft: 2 }}>
							{[
								'Choice of Backdrop with Bio Degradable Latex Balloon Garland (choice of Oh Baby, Happy Birthday or Let’s Party sign)',
								'Personalised Welcome Sign',
								'Table Styling and design (in your colour scheme)',
								'Plus choice of welcome Reception, Gift or Cake Table Design & Styling ',
							].map((included, i) => (
								<ListItem key={i} sx={{ py: 0.5 }}>
									<Typography component={'p'} variant='p'>
										• {included}
									</Typography>
								</ListItem>
							))}
						</List>

						{/* Price */}
						<Box sx={{ textAlign: 'center', my: 2 }}>
							<Typography
								component={'p'}
								variant='titleText'
								sx={{ fontSize: 20 }}>
								£250
							</Typography>
						</Box>
						{/* Disclaimer */}
						<Typography component='p' variant='smallerP' sx={{ mb: 2 }}>
							* Perfect for your next Baby Shower, Birthday, Anniversary or
							Engagement Celebration
						</Typography>
					</Box>
					{/* Title */}
				</Grid>
			</Grid>
		</Box>
	);
}
