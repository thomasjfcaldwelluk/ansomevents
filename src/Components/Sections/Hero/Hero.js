import { Box, Typography, Grid, Button } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function Hero({
	title,
	adj,
	subtitle,
	heroImage,
	alt,
	primaryCta,
	secondaryCta,
}) {
	const lines = title.split('\n');
	return (
		<SectionWrapper id='hero' aria-label='Hero Section' variant='dark'>
			<GridLayout>
				<Grid size={{ xs: 12, md: 6 }} padding={4}>
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
					<Box marginTop={4}>
						<Button variant='primary'>{primaryCta.label}</Button>
						<Button variant='secondary'>{secondaryCta.label}</Button>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						component='img'
						src={heroImage}
						alt={alt}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: 2,
						}}
					/>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
