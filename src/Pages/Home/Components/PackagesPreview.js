import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import PackagePreviewImage from '../../../Assets/Photos/HomePageImages/packagesPreview.webp';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import theme from '../../../theme';

export default function PackagesPreview() {
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
					image={PackagePreviewImage}
					alt='Your image alt text'
				/>
				<CardContent sx={{ flex: 1 }}>
					<Typography variant='h4' component={'h4'} sx={{ mb: 2 }}>
						Decor Packages
					</Typography>
					<Box>
						<MuiLink
							component={Link}
							variant='titleText'
							to='/whatweoffer/packages'
							underline='hover'
							display='block'>
							See More Of Our Beautiful Creations
						</MuiLink>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
