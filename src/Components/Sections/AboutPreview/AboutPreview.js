import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import { Button, Typography, Box, Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SectionDivider from 'Components/ui/Divider/SectionDivider';

export default function AboutPreview({
	title,
	description,
	intro,
	image,
	alt,
	text,
	cta,
}) {
	return (
		<SectionWrapper id='about-us-preview' variant='light'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout alignItems='center'>
				<Grid size={{ xs: 12, md: 7 }}>
					<CenterBox padding={{ xs: 0, md: 2 }}>
						<Typography
							variant='body1'
							component={'p'}
							fontWeight={450}
							fontSize={'0.9rem'}>
							{description}
						</Typography>
					</CenterBox>
					<CenterBox>
						<SectionDivider variant='gold' />
					</CenterBox>
					<CenterBox sx={{ flexDirection: 'column' }} gap={4}>
						<Typography variant='h6' component={'p'}>
							{text}
						</Typography>
						<Button variant='primary' href={cta.link}>
							{cta.label}
						</Button>
					</CenterBox>
				</Grid>
				<Grid size={{ xs: 12, md: 5 }}>
					<Box
						component={'img'}
						src={image}
						alt={alt}
						sx={{
							borderRadius: 2,
							width: '100%',
							boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
						}}
					/>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
