import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import PackagePreviewImage from '../../../Assets/Photos/HomePageImages/packagesPreview.webp';
import { Link } from 'react-router-dom';

export default function PackagesPreview() {
	return (
		<Box
			sx={{
				position: 'relative',
				backgroundImage: `url(${PackagePreviewImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#fff',
			}}>
			{/* Overlay Content */}
			<Box
				sx={{
					position: 'absolute',
					zIndex: 2,
					textAlign: 'center',
					p: 2,
					backgroundColor: 'rgba(0, 0, 0, 0.4)', // optional for readability
					borderRadius: 2,
				}}>
				<Typography variant='h4' sx={{ mb: 2 }}>
					Our Decor Packages
				</Typography>
				<Button
					variant='contained'
					color='secondary'
					component={Link}
					to='/whatweoffer/packages'>
					View Packages
				</Button>
			</Box>
		</Box>
	);
}
