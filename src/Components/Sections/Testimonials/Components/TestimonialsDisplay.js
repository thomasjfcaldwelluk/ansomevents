import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import TestimonialsSlider from './TestimonialsSlider';
import TestimonialsGrid from './TestimonialsGrid';

export default function TestimonialsDisplay({ items }) {
	const theme = useTheme();
	const isTabletDown = useMediaQuery(theme.breakpoints.down('xl'));

	return isTabletDown ? (
		<TestimonialsSlider items={items} />
	) : (
		<TestimonialsGrid items={items} />
	);
}
