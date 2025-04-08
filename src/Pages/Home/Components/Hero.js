import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../theme';
import Grid from '@mui/material/Grid2';
import heroImage from '../../../Assets/Photos/HomePageImages/websiteHero.webp';

const heroStyles = {
	sectionContainer: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		backgroundImage: `url(${heroImage})`,
		backgroundColor: 'black',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		position: 'relative',
	},
	heroContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'space-between',
		position: 'relative',
		zIndex: 2,
	},
	heroHeaderMain: {
		color: theme.palette.primaryHeader.main,
		textAlign: 'center',
	},
	heroHeaderMainSpan: {
		background: theme.palette.primaryHeader.main,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		fontSize: { xs: '1.9rem', sm: '2.9rem', md: '3rem', lg: '3.8rem' },
		LineHeight: '1',
	},
	heroTagContainer: {
		padding: '1.3rem',
	},
	heroTag: {
		fontWeight: 500,
		color: theme.palette.primaryHeader.secondary,
		textAlign: 'center',
	},
	buttonContainer: {
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonOne: {
		minWidth: '200px',
		backgroundColor: theme.palette.primaryHeader.main,
		fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Adjust size for different screens
	},
	buttonTwo: {
		minWidth: '200px',
		borderColor: theme.palette.primaryHeader.main,
		color: theme.palette.primaryHeader.main,
		fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Adjust size for different screens
	},
};

export default function Hero() {
	return (
		<Box
			component='section'
			className='Hero_Section'
			sx={{ ...heroStyles.sectionContainer }}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(228, 222, 222, 0.5)', // ← dark overlay
					zIndex: 1,
				}}
			/>
			<Grid container spacing={15} sx={{ ...heroStyles.heroContainer }}>
				<Grid item>
					<Typography
						variant='h1'
						component='h1'
						sx={{ ...heroStyles.heroHeaderMain }}>
						Ansom Events!
						<br />
						<Typography
							variant='h1'
							component='span'
							sx={{ ...heroStyles.heroHeaderMainSpan }}>
							Transforming Dreams Into Memories
						</Typography>
					</Typography>
					<Grid item sx={{ ...heroStyles.heroTagContainer }}>
						<Typography
							variant='h2'
							component='h2'
							sx={{ ...heroStyles.heroTag }}>
							Bringing Californian Razzamatazz to the UK
						</Typography>
					</Grid>
				</Grid>

				{/* <Stack
					item
					spacing={2}
					direction={{ xs: 'column', md: 'row' }}
					sx={{ ...heroStyles.buttonContainer }}>
					<Button
						component={Link}
						to='/latestspecials'
						variant='contained'
						sx={{ ...heroStyles.buttonOne }}>
						Latest Specials
					</Button>

					<Button
						component={Link}
						to='/decorpackages'
						variant='outlined'
						sx={{ ...heroStyles.buttonTwo }}>
						See All Packages
					</Button>
				</Stack> */}
			</Grid>
		</Box>
	);
}
