import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import galleryPreview1 from '../../../Assets/Photos/HomePageImages/galleryPreview1.webp';
import galleryPreview2 from '../../../Assets/Photos/HomePageImages/galleryPreview2.webp';
import galleryPreview3 from '../../../Assets/Photos/HomePageImages/galleryPreview3.webp';
import theme from '../../../theme';
const galleryPreviewStyles = {
	imageStyles: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		boxShadow: 2,
	},
};

export default function GalleryPreview() {
	return (
		<Box sx={{ px: 2, textAlign: 'center' }}>
			<Grid container spacing={2}>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview1}
						alt={`Gallery preview`}
						sx={{ ...galleryPreviewStyles.imageStyles }}
					/>
				</Grid>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview2}
						alt={`Gallery preview`}
						sx={{ ...galleryPreviewStyles.imageStyles }}
					/>
				</Grid>
				<Grid item size={4}>
					<Box
						component='img'
						src={galleryPreview3}
						alt={`Gallery preview`}
						sx={{ ...galleryPreviewStyles.imageStyles }}
					/>
				</Grid>
			</Grid>
			<Box
				sx={{
					marginBlock: 2,
					display: 'flex',
					justifyContent: 'center',
					color: theme.palette.primaryHeader.main,
				}}>
				<MuiLink
					component={Link}
					variant='titleText'
					to='/gallery'
					underline='hover'
					display='block'
					color='#3D3D3D'
					fontSize={20}>
					See More Of Our Past Events
				</MuiLink>
			</Box>
		</Box>
	);
}
