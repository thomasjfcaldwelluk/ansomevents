import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';

import babyShowerSpecial from '../../../Assets/Photos/Specials/babyShowerSpecial.webp';
import babyBingo from '../../../Assets/Photos/Specials/babyBingo.webp';
import babyBoxes from '../../../Assets/Photos/Specials/Babyboxes.webp';
import easel from '../../../Assets/Photos/Specials/easel.webp';

export default function BabyShowerPackage() {
	return (
		<Box>
			<Grid container sx={{ padding: 5 }} spacing={4}>
				<Grid item size={6}>
					<Box component='img' src={babyShowerSpecial} width={'80%'} />
				</Grid>
				<Grid item size={6}>
					<Box sx={{ width: '100%' }}>
						<Typography component={'h2'} variant='h2'>
							Baby Shower Package
						</Typography>
						<Box>
							<List
								sx={{
									width: '100%',
								}}>
								{[
									'Sailboard',
									'oh baby sign',
									'Balloon garland in your event theme colour made with high quality bio-degradable latex balloons',
									'Baby box with balloons for gift table',
									'Easel decorated faux florals arrangement and personalized welcome sign',
									'Cake Pedestal',
									'Choice of 2 baby shower game (Up to 20 players)*',
								].map((value) => (
									<ListItem key={value} disableGutters padding={0}>
										<ListItemText primary={`${value}`} padding={0} />
									</ListItem>
								))}
							</List>
						</Box>
						<Box
							sx={{
								marginBlock: 2,
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Typography
								sx={{
									textAlign: 'center',
									padding: 2,
									border: '1px solid blue',
									display: 'inline',
									fontSize: 19,
								}}>
								200 Pounds
							</Typography>
						</Box>
						<Box>
							<Typography>
								*Games options: Baby Bingo, Name that Baby Song, Don't Say The
								Word Baby, Baby Word Search and Guess The Safety Pin Count
							</Typography>
						</Box>
					</Box>
					<Box sx={{ width: '100%' }}>
						<Grid container spacing={1}>
							<Grid item size={4}>
								<Box component='img' src={easel} width={'100%'} />
							</Grid>
							<Grid item size={4}>
								<Box component='img' src={babyBoxes} width={'100%'} />
							</Grid>
							<Grid item size={4}>
								<Box component='img' src={babyBingo} width={'100%'} />
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
