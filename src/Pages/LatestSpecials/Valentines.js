import { Box, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid2';
import ValentinesDayForm from './ValentinesDayForm';

const descriptionText =
	'Ansom Events is thrilled to team up with Betty’s Cakes for a Valentine’s Day special! Get a Valentine’s Day Balloon Stack and six delicious cupcakes for just £20 (sold separately for £12.50 each). Delivery within Saltash is available for £5, and you can add a personalized message for an additional £5. Celebrate love with this delightful package that’s perfect for surprising someone special or adding a festive touch to your day';

export default function Valentines() {
	const icons = Array(3).fill(
		<FavoriteIcon fontSize='large' sx={{ color: '#DD2E44' }} />
	);
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#FFC2C2',
			}}>
			<Grid container padding={2}>
				<Grid item className='frame_1' size={{ xs: 8 }}>
					<Box className='title'>
						<Typography fontSize={'50px'} textAlign={'center'}>
							Valentines Day Special
						</Typography>
					</Box>
					<Box className='description' marginBlock={4} padding={2}>
						<Typography>{descriptionText}</Typography>
					</Box>
					<Box className='heart' marginBlock={4}>
						<Grid
							container
							spacing={2}
							justifyContent='center'
							alignItems='center'>
							{icons.map((icon, index) => (
								<Grid
									item
									xs={4} // Adjust width for responsiveness
									key={index}
									display='flex'
									justifyContent='center'
									alignItems='center'>
									<Box>{icon}</Box>
								</Grid>
							))}
							<Box item>
								<Typography>Book Below</Typography>
							</Box>
							{icons.map((icon, index) => (
								<Grid
									item
									xs={4} // Adjust width for responsiveness
									key={index}
									display='flex'
									justifyContent='center'
									alignItems='center'>
									<Box>{icon}</Box>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box className='form'>
						<ValentinesDayForm />
					</Box>
				</Grid>
				<Grid item className='frame_2' size={{ xs: 4 }}>
					<Box className='image_1'></Box>
					<Grid container>
						<Box item className='image_2'></Box>
						<Box item className='image_3'></Box>
						<Box item className='image_4'></Box>
						<Box item className='image_5'></Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
