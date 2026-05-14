import React, { useState } from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import TestimonialsCard from './TestimonialsCard';

export default function TestimonialsCarousel({ items }) {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

	const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

	const [currentIndex, setCurrentIndex] = useState(0);

	const maxIndex = Math.max(items.length - itemsPerPage, 0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + itemsPerPage, maxIndex));
	};

	const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

	return (
		<Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						sm: itemsPerPage === 2 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
						lg: 'repeat(3, 1fr)',
					},
					gap: 3,
				}}>
				{visibleItems.map((item) => (
					<Box key={item.id}>
						<TestimonialsCard {...item} />
					</Box>
				))}
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 4,
					mt: 4,
				}}>
				<IconButton
					onClick={handlePrev}
					disabled={currentIndex === 0}
					aria-label='Previous testimonials'>
					<ChevronLeft sx={{ fontSize: 30, color: '#fff' }} />
				</IconButton>

				<IconButton
					onClick={handleNext}
					disabled={currentIndex >= maxIndex}
					aria-label='Next testimonials'>
					<ChevronRight sx={{ fontSize: 30, color: '#fff' }} />
				</IconButton>
			</Box>
		</Box>
	);
}
