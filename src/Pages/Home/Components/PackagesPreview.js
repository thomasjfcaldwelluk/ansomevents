import { Box, Typography } from '@mui/material';
import React from 'react';
import PackagePreviewImage from '../../../Assets/Photos/HomePageImages/packagesPreview.webp';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

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
				borderRadius: 2,
				boxShadow: 2,
			}}>
			<Box
				sx={{
					position: 'absolute',
					zIndex: 2,
					textAlign: 'center',
					left: '50%',
					bottom: 30,
					transform: 'translateX(-50%)',
					p: 2,
					backgroundColor: 'rgba(0, 0, 0, 0.4)',
					borderRadius: 2,
					width: { xs: '90%', sm: 'auto' }, // optional: responsive width
				}}>
				<Typography
					variant='h4'
					component={'h4'}
					sx={{ mb: 2, color: 'white' }}>
					Decor Packages
				</Typography>
				<Box>
					<MuiLink
						component={Link}
						color='white'
						variant='titleText'
						to='/whatweoffer/packages'
						underline='hover'
						display='block'>
						See More Of Our Beautiful Creations
					</MuiLink>
				</Box>
			</Box>
		</Box>
	);
}
