import { Grid } from '@mui/material';
import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';

export default function TestimonialGrids({ items }) {
	return (
		<GridLayout>
			{items.map((item) => (
				<Grid key={item.id} size={{ xs: 12, md: 4 }}>
					<TestimonialsCard {...item} />
				</Grid>
			))}
		</GridLayout>
	);
}
