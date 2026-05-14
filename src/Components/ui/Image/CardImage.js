import React from 'react';
import { Box, CardMedia } from '@mui/material';

export default function CardImage({
	src,
	alt,
	variant = 'standard',
	ratio = '4 / 3',
	...props
}) {
	return (
		<Box
			sx={{
				width: '100%',
				overflow: 'hidden',
			}}>
			<CardMedia
				component='img'
				image={src}
				alt={alt || 'Ansom Events image'}
				variant={variant}
				loading='lazy'
				sx={{
					aspectRatio: ratio,
					height: 'auto',
					objectFit: 'cover',
					transition: 'transform 0.3s ease',
					'&:hover': {
						transform: 'scale(1.05)',
					},
				}}
				{...props}
			/>
		</Box>
	);
}
