import { Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
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
					<Grid key={index} size={{ xs: 2 }} sx={{ textAlign: 'center' }}>
						<CenterBox padding={0}>
							<Typography variant='bodySmall' component={'p'}>
								{point}
							</Typography>
						</CenterBox>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
