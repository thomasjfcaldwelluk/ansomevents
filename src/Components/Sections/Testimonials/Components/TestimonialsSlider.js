import { Box } from '@mui/material';
import React from 'react';
import TestimonialCard from './TestimonialsCard';

export default function TestimonialsSlider({ items }) {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto',
				scrollSnapType: 'x mandatory',
				pb: 1,
			}}>
			{items.map((item) => (
				<Box
					key={item.id}
					sx={{
						minWidth: { xs: '100%', sm: '100%', md: '30%' },
						scrollSnapAlign: 'start',
					}}>
					<TestimonialCard {...item} />
				</Box>
			))}
		</Box>
	);
}
