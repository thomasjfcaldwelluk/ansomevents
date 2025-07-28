import { Box, Typography } from '@mui/material';
import theme from '../../../theme';
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
		bgcolor: 'transparent',
		padding: theme.spacing(2),
	},
	heroHeaderMain: {
		color: '#EFEFEF',
		textAlign: 'center',
	},

	heroTag: {
		fontWeight: 500,
		color: '#F5F5F5',
		textAlign: 'center',
	},
};

export default function Hero() {
	return (
		<Box sx={{ ...heroStyles.sectionContainer }}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.45)', // ← dark overlay
					zIndex: 1,
				}}
			/>
			<Box spacing={15} sx={{ ...heroStyles.heroContainer }}>
				<Box bgColor='white' p={2}>
					<Typography
						variant='h1'
						component='h1'
						sx={{ ...heroStyles.heroHeaderMain }}>
						Ansom Events
					</Typography>
					<Typography
						variant='h2'
						component='h2'
						sx={{ ...heroStyles.heroTag }}>
						Where Style Meets Celebration
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
