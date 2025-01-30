import { Box, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid2';
import ValentinesDayForm from './ValentinesDayForm';
import imageOne from '../../Assets/Photos/Specials/BothItemsGiveAway.jpg';
import imageTwo from '../../Assets/Photos/Specials/BalloonStackValentinesDay.jpg';
import imageThree from '../../Assets/Photos/Specials/justHeart.jpg';
import imageFour from '../../Assets/Photos/Specials/AllCakes.jpg';
import imageFive from '../../Assets/Photos/Specials/OneCake.jpg';

const descriptionText =
	'Ansom Events is thrilled to team up with Betty’s Cakes for a Valentine’s Day special! Get a Valentine’s Day Balloon Stack and six delicious cupcakes for just £20 (sold separately for £12.50 each). Delivery within Saltash is available for £5, and you can add a personalized message for an additional £5. Celebrate love with this delightful package that’s perfect for surprising someone special or adding a festive touch to your day';

const valentinesImages = [
	{
		id: 1,
		src: imageOne,
		title: '',
		alt: '',
	},
	{
		id: 2,
		src: imageTwo,
		title: '',
		alt: '',
	},
	{
		id: 3,
		src: imageThree,
		title: '',
		alt: '',
	},
	{
		id: 4,
		src: imageFour,
		title: '',
		alt: '',
	},
	{
		id: 5,
		src: imageFive,
		title: '',
		alt: '',
	},
];

export default function Valentines() {
	const icons = Array(3).fill(
		<FavoriteIcon fontSize='large' sx={{ color: '#DD2E44' }} />
	);
	return (
		<Box
			sx={{
				backgroundColor: '#FFC2C2',
			}}>
			<Grid container padding={2}>
				<Grid item size={{ xs: 9 }} sx={{ backgroundColor: 'blue' }}>
					<Box className='title'>
						<Typography fontSize={'50px'} textAlign={'center'}>
							Valentines Day Special
						</Typography>
					</Box>
					<Box className='description' marginBlock={4} padding={2}>
						<Typography>{descriptionText}</Typography>
					</Box>
					<Box className='heart' marginBlock={4}>
						<Grid container spacing={2} justifyContent='center'>
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
				</Grid>
				<Grid item container size={{ xs: 3 }} sx={{ backgroundColor: 'green' }}>
					<Grid item>
						<Box>
							<Box sx={{ width: '100%', overflow: 'hidden' }}>
								<img
									src={imageOne}
									alt='Description'
									style={{ width: '100%', height: 'auto', display: 'block' }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid container>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageTwo}
								sx={{ width: '100%', height: 'auto', display: 'block' }}
							/>
						</Grid>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageThree}
								sx={{ width: '100%', height: 'auto', display: 'block' }}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageFour}
								sx={{ width: '100%', height: 'auto', display: 'block' }}
							/>
						</Grid>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageFive}
								sx={{ width: '100%', height: 'auto', display: 'block' }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
