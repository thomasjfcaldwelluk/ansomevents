import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../../../theme';
import Grid from '@mui/material/Grid2';

const heroStyles = {
	sectionContainer: {
		backgroundColor: theme.palette.primaryBackground.main,
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
	},
	heroContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'space-between',
	},
	heroHeaderMain: {
		color: theme.palette.primaryHeader.main,
		textAlign: 'center',
	},
	heroHeaderMainSpan: {
		background: 'linear-gradient(45deg, #FFC413,#F7DD7D)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		fontSize: { xs: '1rem', sm: '2.9rem', md: '3rem', lg: '3.8rem' },
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
