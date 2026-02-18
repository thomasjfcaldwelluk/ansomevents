import { Box, Container } from '@mui/material';
import React from 'react';

export default function SectionWrapper({
	children,
	variant = 'default',
	sx,
	...props
}) {
	return (
		<Box
			component='section'
			sx={(theme) => ({
				py: { xs: 1, md: 2, lg: 2 },
				borderRadius: 4,
				marginBlock: 4,

				...(variant === 'light' && {
					backgroundColor: theme.palette.primary.main,
				}),

				...(variant === 'dark' && {
					backgroundColor: theme.palette.grey[900],
					color: theme.palette.common.white,
				}),

				...(variant === 'compact' && {
					py: { xs: 6, md: 8 },
				}),

				...sx,
			})}
			{...props}>
			{children}
		</Box>
	);
}
