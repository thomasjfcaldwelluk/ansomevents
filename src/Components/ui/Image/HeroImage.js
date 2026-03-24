import React from 'react';
import { Box } from '@mui/material';

export default function HeroImage({ src, alt = '', title, height = 550 }) {
	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height,
				overflow: 'hidden',
			}}>
			<Box
				component='img'
				src={src}
				alt={alt}
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</Box>
	);
}
