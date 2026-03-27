import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import { Button, Typography, Box, Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';

export default function AboutPreview({
	title,
	description,
	image,
	alt,
	text,
	cta,
}) {
	return (
		<SectionWrapper id='about-us-preview' variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				<Grid size={{ xs: 12, md: 7 }}>
					<CenterBox padding={{ xs: 0, md: 2 }}>
						<Typography variant='body1' component={'p'}>
							{description}
						</Typography>
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
					<Box component={'img'} src={image} alt={alt} width={'100%'} />
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
