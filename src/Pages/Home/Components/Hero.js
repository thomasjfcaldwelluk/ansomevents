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
		color: theme.palette.primaryHeader.secondary,
		textAlign: 'center',
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
					backgroundColor: 'rgba(255, 255, 255, 0.7)', // ← dark overlay
					zIndex: 1,
				}}
			/>
			<Box spacing={15} sx={{ ...heroStyles.heroContainer }}>
				<Box>
					<Typography
						variant='h1'
						component='h1'
						sx={{ ...heroStyles.heroHeaderMain }}>
						Ansom Events - Transforming Dreams Into Memories
					</Typography>
					<Grid item sx={{ ...heroStyles.heroTagContainer }}>
						<Typography
							variant='h2'
							component='h2'
							sx={{ ...heroStyles.heroTag }}>
							Cali Cool Meets UK Chic
						</Typography>
					</Grid>
				</Box>

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
			</Box>
		</Box>
	);
}
