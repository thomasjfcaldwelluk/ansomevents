import React from 'react';
import {
	Typography,
	Box,
	CardMedia,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import babyShowerSpecial from '../../Assets/Photos/Specials/babyShowerSpecial.webp';
import babyBingo from '../../Assets/Photos/Specials/babyBingo.webp';
import babyBoxes from '../../Assets/Photos/Specials/Babyboxes.webp';
import easel from '../../Assets/Photos/Specials/easel.webp';

const BabyShowerPackage = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

	return (
		<Grid
			container
			spacing={2}
			justifyContent='center'
			alignItems='center'
			sx={{ px: 3, py: 4 }}>
			{/* Desktop View: Image Left, Text Right */}
			{!isMobile && !isTablet && (
				<>
					{/* Left: Main Image */}
					<Grid item size={{ md: 4 }}>
						<CardMedia
							component='img'
							image={babyShowerSpecial}
							alt='Baby Shower Special'
							sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
						/>
					</Grid>

					{/* Right: Package Details */}
					<Grid item size={{ md: 8 }}>
						<Box sx={{ bgcolor: '#f9f9f9', p: 3, borderRadius: 2 }}>
							<Typography variant='h3' fontWeight='bold' gutterBottom>
								Baby Shower Special
							</Typography>
							<List>
								{[
									'Sailboard',
									'Oh baby sign',
									'Balloon garland in your event theme colour made w high quality bio-degradable latex balloons',
									'Baby box with balloons',
									'Easel decorated faux florals arrangement and personalized Welcome sign',
									'Cake pedestal',
									'Choice of 2 baby shower games',
								].map((item, index) => (
									<ListItem key={index} disablePadding>
										<ListItemText primary={`• ${item}`} />
									</ListItem>
								))}
							</List>
							<Typography variant='h5' fontWeight='bold' sx={{ mt: 2 }}>
								£200
							</Typography>
							<Typography
								variant='caption'
								sx={{ fontStyle: 'italic', display: 'block', mt: 1 }}>
								*Games options: Baby Bingo, Name That Baby Song, Don't Say The
								Word Baby, Baby Word Search, Guess The Safety Pin Count
							</Typography>
						</Box>
						{/* Extra Images */}
						<Grid
							item
							size={{ md: 7 }}
							container
							spacing={2}
							justifyContent='center'>
							{[easel, babyBoxes, babyBingo].map((img, index) => (
								<Grid item size={{ xs: 4 }} key={index}>
									<CardMedia
										component='img'
										image={img}
										sx={{ width: '100%', borderRadius: 2 }}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</>
			)}

			{/* Tablet View: Text on Top, Images Below */}
			{isTablet && (
				<Grid item size={{ xs: 12 }}>
					<Box
						sx={{
							bgcolor: '#f9f9f9',
							p: 3,
							borderRadius: 2,
							textAlign: 'center',
						}}>
						<Typography variant='h5' fontWeight='bold' gutterBottom>
							Baby Shower Special
						</Typography>
						<List sx={{ textAlign: 'left', display: 'inline-block' }}>
							{[
								'Sailboard',
								'Oh baby sign',
								'Balloon garland in your event theme',
								'Baby box with balloons',
								'Easel with faux florals & welcome sign',
								'Cake pedestal',
								'Choice of 2 baby shower games',
							].map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemText primary={`• ${item}`} />
								</ListItem>
							))}
						</List>
						<Typography variant='h5' fontWeight='bold' sx={{ mt: 2 }}>
							£200
						</Typography>
						<Typography
							variant='caption'
							sx={{ fontStyle: 'italic', display: 'block', mt: 1 }}>
							*Games options: Baby Bingo, Name That Baby Song, Don't Say The
							Word Baby, Baby Word Search, Guess The Safety Pin Count
						</Typography>
					</Box>

					{/* Images Grid */}
					<Grid container spacing={2} sx={{ mt: 2 }}>
						<Grid item size={{ xs: 6 }}>
							<CardMedia
								component='img'
								image={babyShowerSpecial}
								sx={{ width: '100%', borderRadius: 2 }}
							/>
						</Grid>
						<Grid item size={{ xs: 6 }} container spacing={1}>
							{[easel, babyBoxes, babyBingo].map((img, index) => (
								<Grid item size={{ xs: 12 }} key={index}>
									<CardMedia
										component='img'
										image={img}
										sx={{ width: '100%', borderRadius: 2 }}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			)}

			{/* Mobile View: Stacked Layout */}
			{isMobile && (
				<Grid item size={{ xs: 12 }}>
					<Box
						sx={{
							bgcolor: '#f9f9f9',
							p: 3,
							borderRadius: 2,
							textAlign: 'center',
						}}>
						<Typography variant='h6' fontWeight='bold' gutterBottom>
							Baby Shower Special
						</Typography>
						<List sx={{ textAlign: 'left', display: 'inline-block' }}>
							{[
								'Sailboard',
								'Oh baby sign',
								'Balloon garland in your event theme',
								'Baby box with balloons',
								'Easel with faux florals & welcome sign',
								'Cake pedestal',
								'Choice of 2 baby shower games',
							].map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemText
										primary={`• ${item}`}
										primaryTypographyProps={{ variant: 'body2' }}
									/>
								</ListItem>
							))}
						</List>
						<Typography variant='h5' fontWeight='bold' sx={{ mt: 2 }}>
							£200
						</Typography>
						<Typography
							variant='caption'
							sx={{ fontStyle: 'italic', display: 'block', mt: 1 }}>
							*Games options: Baby Bingo, Name That Baby Song, Don't Say The
							Word Baby, Baby Word Search, Guess The Safety Pin Count
						</Typography>
					</Box>

					{/* Image Stack */}
					<Grid item size={{ xs: 12 }}>
						<CardMedia
							component='img'
							image={babyShowerSpecial}
							sx={{ width: '100%', borderRadius: 2 }}
						/>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

export default BabyShowerPackage;
