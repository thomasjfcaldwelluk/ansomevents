import React from 'react';
import { Box } from '@mui/material';

export default function HeroImage({ src, alt = '', title, height = 550 }) {
	return (
		<Box sx={{ position: 'relative' }}>
			<Box
				component='img'
				src={src}
				alt={alt}
				sx={{
					width: '100%',
					height: { xs: 220, md: 350 },
					objectFit: 'cover',
					borderRadius: 2,
					boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
				}}
			/>
		</Box>
	);
}
