import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import galleryPreview1 from '../../../Assets/Photos/HomePageImages/galleryPreview1.webp';
import galleryPreview2 from '../../../Assets/Photos/HomePageImages/galleryPreview2.webp';
import galleryPreview3 from '../../../Assets/Photos/HomePageImages/galleryPreview3.webp';
import theme from '../../../theme';

const images = [galleryPreview1, galleryPreview2, galleryPreview3];

const galleryPreviewStyles = {
	imageStyles: {
		imageRatio: '3/2',
		width: { xs: '100%', md: '50%' },
		height: 'auto',
		maxHeight: '400px',
		objectFit: 'cover',
		boxShadow: 2,
		borderRadius: 2,
		transition: 'opacity 0.5s',
	},
};

export default function GalleryPreview() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 2500); // Change image every 2.5 seconds
		return () => clearInterval(timer);
	}, []);

	return (
		<Box
			sx={{
				p: 2,
				mb: 4,
				textAlign: 'center',
				backgroundColor: theme.palette.primaryBackground.secondary,
			}}>
			<Box
				component='img'
				src={images[current]}
				alt='Gallery preview'
				sx={{ ...galleryPreviewStyles.imageStyles }}
			/>
			<Box
				sx={{
					marginBlock: 2,
					display: 'flex',
					justifyContent: 'center',
				}}>
				<MuiLink
					component={Link}
					variant='titleText'
					to='/gallery'
					underline='hover'
					display='block'
					color='theme.palette.primaryHeader.main'
					fontSize={20}>
					See More Of Our Past Events
				</MuiLink>
			</Box>
		</Box>
	);
}
