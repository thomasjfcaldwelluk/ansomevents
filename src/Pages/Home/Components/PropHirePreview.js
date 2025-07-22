import { Box, Typography } from '@mui/material';
import React from 'react';
import PropHirePreviewImage from '../../../Assets/Photos/HomePageImages/propsPreview.webp';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export default function PropHirePreview() {
	return (
		<Box
			sx={{
				position: 'relative',
				backgroundImage: `url(${PropHirePreviewImage})`,
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
			{/* Overlay Content */}
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
					Prop Hire
				</Typography>
				<Box>
					<MuiLink
						component={Link}
						color='white'
						variant='titleText'
						to='/whatweoffer/prophire'
						underline='hover'
						display='block'>
						See How To Complete Your Events
					</MuiLink>
				</Box>
			</Box>
		</Box>
	);
}
