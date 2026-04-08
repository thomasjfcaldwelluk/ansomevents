import { Card, CardContent, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutWhy({ id, title, intro, points }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout>
				{points.map((point, index) => (
					<Grid
						key={index}
						size={{ xs: 12, sm: 6, md: 4 }}
						sx={{ textAlign: 'center' }}>
						<Card padding={0}>
							<CardContent>
								<Typography variant='body1' component={'p'}>
									{point}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
