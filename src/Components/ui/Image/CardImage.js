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
				aspectRatio: ratio,
				overflow: 'hidden',
			}}>
			<CardMedia
				component='img'
				image={src}
				alt={alt || 'Ansom Events image'}
				variant={variant}
				loading='lazy'
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
				{...props}
			/>
		</Box>
	);
}
