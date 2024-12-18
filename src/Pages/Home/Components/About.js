import React from 'react';
import { Typography, Box, Stack, useMediaQuery } from '@mui/material';
import us from '../../../Assets/Photos/HomePageImages/OwnersPhoto.jpg';
import them from '../../../Assets/Photos/HomePageImages/ownersLandscape.jpg';
import Grid from '@mui/material/Grid2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '../../../theme';

export default function About() {
	const rows = [
		'Passionate about creating unforgettable events, from weddings to corporate functions',
		'Expert management and unique decor to bring your vision to life',
		'Dedicated to delivering stress-free and enjoyable experiences',
		'From concept to completion, we tailor events to your style and needs',
		'Let us craft the perfect event for your special moments',
	];
	const isSmallScreen = useMediaQuery('(min-width:900px)');

	const imageUrl = isSmallScreen
		? us // Small screen image
		: them;

	return (
		<Box
			component='section'
			className='About_Ansom_Events'
			sx={{
				padding: { xs: 0, md: 4 },
				backgroundColor: theme.palette.primaryBlue.main,
			}}>
			<Grid container padding={5}>
				{/* First Column: Image */}
				<Grid item size={{ xs: 12, md: 4 }}>
					<Box
						loading='lazy'
						component='img'
						src={imageUrl} // Replace with your image URL
						alt='Image of the Owners Of Ansom Events - Melissa Caldwell and Thomas Caldwell'
						title='Image of the Owners Of Ansom Events - Melissa Caldwell and Thomas Caldwell'
						width={{ xs: '100%', md: '80%' }}
						height='auto'
						sx={{
							width: { xs: '100%', md: '80%' },
							height: 'auto',
							borderRadius: '16px',
						}} // Ensures responsive image
					/>
				</Grid>

				{/* Second Column: Text */}
				<Grid item size={{ xs: 12, md: 8 }}>
					<Stack
						sx={{
							width: '100%',
						}}>
						<Typography
							sx={{
								fontSize: '1em',
								color: theme.palette.whiteText.main,
								textTransform: 'uppercase',
								fontWeight: 600,
							}}>
							About Us
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: '1.8em', md: '2.5rem' },
								color: theme.palette.whiteText.main,
								fontWeight: 600,
							}}>
							The Team Behind Ansom Events
						</Typography>
					</Stack>
					<Box
						item
						sx={{ width: { xs: '100%', md: '80%' }, marginBlock: '1rem' }}>
						<Typography variant='body1' textAlign='left'>
							We are a husband and wife team based in Cornwall, offering full
							event management, prop hire, and venue design. With over 20 years
							of experience, Melissa brings her extensive knowledge of the
							events industry, while Thomas’s expertise in design and marketing
							ensures every detail is both creative and polished.
						</Typography>
					</Box>
					<Box sx={{ maxWidth: '700px' }}>
						<Grid container direction='column' spacing={{ xs: 2, sm: 1 }}>
							{rows.map((text, index) => (
								<Grid
									item
									key={index}
									container
									alignItems='center'
									wrap='nowrap'
									spacing={{ xs: 3, sm: 1 }}>
									<Grid item>
										<CheckCircleIcon
											sx={{
												color: theme.palette.whiteText.main,
												marginTop: '5px',
											}}
										/>
									</Grid>
									<Grid item xs>
										<Typography
											variant='body1'
											sx={{
												color: theme.palette.whiteText.main,
											}}>
											{text}
										</Typography>
									</Grid>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
