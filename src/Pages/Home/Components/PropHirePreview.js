import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import PropHirePreviewImage from '../../../Assets/Photos/HomePageImages/propsPreview.webp';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import theme from '../../../theme';

export default function PropHirePreview() {
	return (
		<Box>
			<Card
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					bgcolor: theme.palette.primaryBackground.secondary,
				}}>
				<CardMedia
					component='img'
					sx={{ width: { xs: '100%', md: 300 }, height: 'auto' }}
					image={PropHirePreviewImage}
					loading='lazy'
					alt='Your image alt text'
				/>
				<CardContent sx={{ flex: 1 }}>
					<Box>
						<Typography
							variant='h4'
							component={'h4'}
							sx={{ mb: 2, textAlign: 'center' }}>
							Prop Hire
						</Typography>
						<Box>
							<Typography component={'p'} variant='smallerP'>
								From statement backdrops to elegant table pieces, our prop hire
								collection has everything you need to elevate your event.
							</Typography>
						</Box>
						<Box>
							<MuiLink
								component={Link}
								variant='titleText'
								to='/whatweoffer/prophire'
								underline='hover'
								display='block'
								sx={{
									marginTop: 4,
									color: theme.palette.primaryAccent.primary,
									'&:hover': {
										color: theme.palette.primaryAccent.secondary,
									},
								}}>
								See How To Complete Your Events
							</MuiLink>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
