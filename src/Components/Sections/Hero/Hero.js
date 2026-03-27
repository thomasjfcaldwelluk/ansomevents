import { Box, Typography, Grid, Button } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
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
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						sx={{
							flexDirection: 'column',
							alignItems: 'flex-start',
							padding: { xs: 0, md: 4 },
							mx: { xs: 'auto', md: 0 },
							width: '100%',
							maxWidth: '650px',
						}}>
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
						<Typography variant='body1' color='#F5F5F5'>
							{subtitle}
						</Typography>
						<CenterBox
							marginTop={4}
							gap={2}
							justifyContent='flex-start'
							padding={0}>
							<Button variant='primary'>{primaryCta.label}</Button>
							<Button variant='light'>{secondaryCta.label}</Button>
						</CenterBox>
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
