import React from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../../../theme';
import Grid from '@mui/material/Grid2';
import one from '../../../Assets/Photos/HomePageImages/HeroImage1.jpg';
import two from '../../../Assets/Photos/HomePageImages/HeroImage2.jpg';
import three from '../../../Assets/Photos/HomePageImages/HeroImage3.jpg';
import four from '../../../Assets/Photos/HomePageImages/HeroImage4.jpg';

const imageHero = [
	{
		index: 1,
		image: one,
		alt: 'Ansom Events Set Up Of 80th Birthday Party',
		title: 'Ansom Events Set Up Of 80th Birthday Party',
	},
	{
		index: 2,
		image: two,
		alt: 'Baby Boxes From an Ansom Events set up',
		title: 'Baby Boxes From an Ansom Events set up',
	},
	{
		index: 3,
		image: three,
		alt: 'Ansom Events set up that includes a shimmer wall with stand, Peacock chair and a pedestal',
		title:
			'Ansom Events set up that includes a shimmer wall with stand, Peacock chair and a pedestal',
	},
	{
		index: 4,
		image: four,
		alt: 'Paw Patrol Balloon for a child party available with Ansom Events',
		title: 'Paw Patrol Balloon for a child party available with Ansom Events',
	},
];

export default function Hero() {
	return (
		<Box
			className='Hero_Section'
			sx={{
				backgroundColor: theme.palette.background.default,
				display: 'flex', // Enable flex for centering content
				alignItems: 'center', // Center vertically
				paddingBlock: { xs: 6, md: 3 },
			}}>
			<Grid container spacing={5}>
				<Grid item size={12}>
					<Box>
						<Typography variant='h1' component='h1'>
							Ansom Events!
							<br /> Transforming Dreams Into Memories
						</Typography>
					</Box>
					<Box sx={{ marginTop: '20px' }}>
						<Typography
							variant='h2'
							component='h2'
							sx={{ fontStyle: 'italic', fontWeight: 200 }}>
							Bringing Californian Elegance to the UK – Unforgettable Events,
							Perfectly Curated.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					container
					spacing={2}
					size={{ xs: 12 }}
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Grid>
						<Button
							component={Link}
							to='/latestspecials'
							variant='contained'
							size='large'
							sx={{ backgroundColor: '#7096CE', width: '200px' }}>
							Latest Specials
						</Button>
					</Grid>
					<Grid>
						<Button
							component={Link}
							to='/decorpackages'
							variant='outlined'
							size='large'
							sx={{ borderColor: '#7096CE', width: '200px' }}>
							See All Packages
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					item
					spacing={2}
					sx={{
						display: { xs: 'none', md: 'flex' },
						padding: '3rem',
						justifyContent: 'center',
					}}>
					{imageHero.map((data, index) => (
						<Grid key={index} item size={{ md: 3 }}>
							<Box
								component='img'
								loading='eager'
								src={data.image}
								alt={data.alt}
								title={data.title}
								sx={{
									width: '70%',
									height: 'auto',
									borderRadius: '8px', // Optional styling for rounded corners
									boxShadow: 3, // Optional shadow
								}}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Box>
	);
}
