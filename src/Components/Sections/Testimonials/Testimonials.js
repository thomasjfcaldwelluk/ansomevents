import { Box, Typography } from '@mui/material';
import React from 'react';
import TestimonialsDisplay from './Components/TestimonialsDisplay';
import SectionHeader from 'Components/ui/Typography/SectionHeader';

export default function Testimonials({ title, subtitle, items }) {
	return (
		<Box>
			<SectionHeader sectionHeader={title} />
			<Typography variant='subtitle1'>{subtitle}</Typography>
			<TestimonialsDisplay items={items} />
		</Box>
	);
}
