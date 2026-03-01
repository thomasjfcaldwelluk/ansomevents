import { Card, Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateEventTypes({ id, title, items }) {
	return (
		<SectionWrapper id={id} variant='dark' aria-label={title}>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item) => (
					<Grid item key={item.id} size={{ xs: 3 }}>
						<Card>{item.title}</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
