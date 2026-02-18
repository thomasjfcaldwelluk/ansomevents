import { Box, Typography, Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import React from 'react';

export default function Hero({ title, adj, subtitle }) {
	const lines = title.split('\n');
	return (
		<Box id='hero' component={'section'}>
			<GridLayout>
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography sx={{ whiteSpace: 'pre-line' }} variant='h1'>
						{lines.map((line, index) => (
							<span
								key={index}
								style={{
									display: 'block',
									opacity: 0,
									animation: `fadeUp 0.6s ease forwards`,
									animationDelay: `${index * 0.3}s`,
								}}>
								{line}
							</span>
						))}
					</Typography>
					<Typography variant='h2'>{adj}</Typography>
					<Typography variant='body1'>{subtitle}</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						component='img'
						src='https://res.cloudinary.com/djjqsmlei/image/upload/v1770205598/Ansom%20Events/Home%20Page/galleryPreview1_mqoy8n.webp'
						alt='decor setup'
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 2,
						}}
					/>
				</Grid>
			</GridLayout>
		</Box>
	);
}
