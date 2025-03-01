import { Box, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid2';
import imageOne from '../../Assets/Photos/Specials/BothItemsGiveAway.jpg';
import imageTwo from '../../Assets/Photos/Specials/BalloonStackValentinesDay.jpg';
import imageThree from '../../Assets/Photos/Specials/justHeart.jpg';
import imageFour from '../../Assets/Photos/Specials/AllCakes.jpg';
import imageFive from '../../Assets/Photos/Specials/OneCake.jpg';
import { Link } from '@mui/material';

const descriptionText =
	'Ansom Events is thrilled to team up with Betty’s Cakes for a Valentine’s Day special! Get a Valentine’s Day Balloon Stack and six delicious cupcakes for just £20 (sold separately for £12.50 each). Celebrate love with this delightful package, perfect for surprising someone special or adding a festive touch to your day. Available for a limited time – don’t miss out! Perfect for couples, friends, or family, this charming bundle adds sweetness and joy to your Valentine’s celebrations. Pre-order now!';

const valentinesStyles = {
	titleStyle: {
		fontSize: { xs: '20px', md: '35px' },
		textAlign: 'center',
		fontWeight: '700',
	},
	iconsStyle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contactContainerStyles: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		marginBlock: '1rem',
	},
	contactTextStyles: {
		fontWeight: 600,
		color: '#2F2E2C',
	},
	contactLinkStyles: {
		marginBottom: 1,
		color: '#050505',
		textDecoration: 'none',
		fontWeight: 700,
	},
	imageStyles: {
		width: '100%',
		height: 'auto',
		display: 'block',
		borderRadius: '4px',
		boxShadow: 1,
	},
};

export default function Valentines() {
	const icons = Array(3).fill(
		<FavoriteIcon fontSize='large' sx={{ color: '#DD2E44' }} />
	);
	return (
		<Box
			sx={{
				backgroundColor: '#f2f3f4',
				borderRadius: '8px',
				boxShadow: 1,
			}}>
			<Grid container padding={2}>
				<Grid item size={{ xs: 12, md: 9 }} marginBlock={4}>
					<Box className='title'>
						<Typography sx={{ ...valentinesStyles.titleStyle }}>
							Valentines Day Special
						</Typography>
					</Box>
					<Box className='description' sx={{ padding: { xs: 1, md: 6 } }}>
						<Typography fontSize={'16px'}>{descriptionText}</Typography>
					</Box>
					<Box className='heart' marginBlock={4}>
						<Grid container spacing={2} justifyContent='center'>
							{icons.map((icon, index) => (
								<Grid
									item
									xs={4} // Adjust width for responsiveness
									key={index}
									sx={{ ...valentinesStyles.iconsStyle }}>
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
									sx={{ ...valentinesStyles.iconsStyle }}>
									<Box>{icon}</Box>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box>
						<Box sx={{ ...valentinesStyles.contactContainerStyles }}>
							<Typography sx={{ ...valentinesStyles.contactTextStyles }}>
								Phone
							</Typography>
							<Link
								href={'tel:+447310009764'}
								target='_blank'
								rel='noopener'
								sx={{ ...valentinesStyles.contactLinkStyles }}>
								07310009764
							</Link>
						</Box>
						<Box sx={{ ...valentinesStyles.contactContainerStyles }}>
							<Typography sx={{ ...valentinesStyles.contactTextStyles }}>
								Email
							</Typography>
							<Link
								href={'mailto:info@ansomevents.com'}
								target='_blank'
								rel='noopener'
								sx={{ ...valentinesStyles.contactLinkStyles }}>
								info@ansomevents.com
							</Link>
						</Box>
						<Box sx={{ ...valentinesStyles.contactContainerStyles }}>
							<Typography sx={{ ...valentinesStyles.contactTextStyles }}>
								Facebook
							</Typography>
							<Link
								href={'https://www.facebook.com/profile.php?id=61566721061832'}
								target='_blank'
								rel='noopener'
								sx={{ ...valentinesStyles.contactLinkStyles }}>
								@ansomevents
							</Link>
						</Box>
					</Box>
				</Grid>
				<Grid item container size={{ xs: 12, md: 3 }} spacing={1}>
					<Grid item>
						<Box>
							<Box sx={{ width: '100%', overflow: 'hidden' }}>
								<img
									src={imageOne}
									alt='Description'
									style={{ ...valentinesStyles.imageStyles }}
								/>
							</Box>
						</Box>
					</Grid>
					<Grid container spacing={1}>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageTwo}
								sx={{ ...valentinesStyles.imageStyles }}
							/>
						</Grid>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageThree}
								sx={{ ...valentinesStyles.imageStyles }}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageFour}
								sx={{ ...valentinesStyles.imageStyles }}
							/>
						</Grid>
						<Grid size={{ xs: 12, sm: 6 }}>
							<Box
								component='img'
								src={imageFive}
								sx={{ ...valentinesStyles.imageStyles }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
