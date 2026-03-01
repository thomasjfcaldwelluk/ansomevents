import { Box, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateWhyUs({ id, title, items }) {
	return (
		<SectionWrapper id={id} aria-label={title} variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item) => (
					<Grid key={item.id} size={{ xs: 3 }}>
						<Box>
							<Typography>{item.text}</Typography>
						</Box>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
