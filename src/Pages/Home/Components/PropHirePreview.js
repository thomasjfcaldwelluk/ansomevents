import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Box,
} from '@mui/material';
import React from 'react';
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
						<Typography variant='h4' component={'h4'} sx={{ mb: 2 }}>
							Prop Hire
						</Typography>
						<Box>
							<MuiLink
								component={Link}
								variant='titleText'
								to='/whatweoffer/prophire'
								underline='hover'
								display='block'>
								See How To Complete Your Events
							</MuiLink>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}
