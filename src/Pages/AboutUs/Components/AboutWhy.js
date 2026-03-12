import { Grid, Box } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutWhy({ id, title, points }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{points.map((point, index) => (
					<Grid key={index} size={{ xs: 3 }} sx={{ textAlign: 'center' }}>
						<Box>{point}</Box>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
