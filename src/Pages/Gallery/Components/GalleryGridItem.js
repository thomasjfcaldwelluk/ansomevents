import { Box } from '@mui/material';
import React from 'react';

export default function GalleryGridItem({ images }) {
	const getGridStyles = () => {
		switch (images.size) {
			case 'wide':
				return { gridColumn: 'span 1' };
			case 'tall':
				return { gridRow: 'span 2' };
			default:
				return {};
		}
	};
	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden',
				borderRadius: 2,
				...getGridStyles(),
			}}>
			<Box
				component='img'
				src={images.src}
				alt={images.alt}
				title={images.alt}
				loading='lazy'
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transition: 'transform 0.4s ease',
				}}
			/>
		</Box>
	);
}
