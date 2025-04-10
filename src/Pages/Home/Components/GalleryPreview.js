import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import galleryPreview1 from '../../../Assets/Photos/HomePageImages/galleryPreview1.webp';
import galleryPreview2 from '../../../Assets/Photos/HomePageImages/galleryPreview2.webp';
import galleryPreview3 from '../../../Assets/Photos/HomePageImages/galleryPreview3.webp';

export default function GalleryPreview() {
	return (
		<Box sx={{ px: 4, py: 8, textAlign: 'center' }}>
			<Grid container spacing={2}>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview1}
						alt={`Gallery preview`}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 2,
							boxShadow: 2,
						}}
					/>
				</Grid>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview2}
						alt={`Gallery preview`}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 2,
							boxShadow: 2,
						}}
					/>
				</Grid>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview3}
						alt={`Gallery preview`}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 2,
							boxShadow: 2,
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
