import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../../../theme';
import Grid from '@mui/material/Grid2';
import { imageHero } from './HomeData';

const heroStyles = {
	sectionContainer: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		alignItems: 'center',
		paddingBlock: { xs: 6, md: 3 },
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	buttonOne: {
		backgroundColor: '#7096CE',
		width: '200px',
	},
	buttonTwo: {
		borderColor: '#7096CE',
		width: '200px',
	},
	imageContainer: {
		display: { xs: 'none', md: 'flex' },
		padding: '3rem',
		justifyContent: 'center',
	},
	imageStyle: {
		width: '70%',
		height: 'auto',
		borderRadius: '8px',
		boxShadow: 3,
	},
};

export default function Hero() {
	return (
		<Box
			component='section'
			className='Hero_Section'
			sx={{ ...heroStyles.sectionContainer }}>
			<Grid container spacing={5}>
				<Grid item size={12}>
					<Box>
						<Typography
							variant='h1'
							component='h1'
							sx={{ color: theme.palette.lightBlack.main }}>
							Ansom Events!
							<br />
							Transforming Dreams Into Memories
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
					sx={{ ...heroStyles.buttonContainer }}>
					<Grid>
						<Button
							component={Link}
							to='/latestspecials'
							variant='contained'
							size='large'
							sx={{ ...heroStyles.buttonOne }}>
							Latest Specials
						</Button>
					</Grid>
					<Grid>
						<Button
							component={Link}
							to='/decorpackages'
							variant='outlined'
							size='large'
							sx={{ ...heroStyles.buttonTwo }}>
							See All Packages
						</Button>
					</Grid>
				</Grid>
				<Grid container item spacing={2} sx={{ ...heroStyles.imageContainer }}>
					{imageHero.map((data, index) => (
						<Grid key={index} item size={{ md: 3 }}>
							<Box
								component='img'
								loading='eager'
								src={data.image}
								alt={data.alt}
								title={data.title}
								sx={{ ...heroStyles.imageStyle }}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Box>
	);
}
