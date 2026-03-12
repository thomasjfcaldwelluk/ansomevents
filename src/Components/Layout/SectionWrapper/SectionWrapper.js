import { Box } from '@mui/material';
import React from 'react';

export default function SectionWrapper({
	children,
	variant = 'default',
	id,
	sx,
	...props
}) {
	return (
		<Box
			id={id}
			component='section'
			sx={(theme) => ({
				p: { xs: 1, md: 2, lg: 8 },
				...(variant === 'light' && {
					backgroundColor: theme.palette.background.subtle,
				}),

				...(variant === 'dark' && {
					backgroundColor: theme.palette.background.dark,
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
