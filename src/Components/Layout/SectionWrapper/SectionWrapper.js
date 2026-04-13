import { Box } from '@mui/material';
import React from 'react';

export default function SectionWrapper({
	children,
	variant = 'default',
	disablePadding = false,
	id,
	sx,
	...props
}) {
	return (
		<Box
			id={id}
			component='section'
			sx={(theme) => ({
				...(!disablePadding && {
					px: { xs: 1, md: 4 },
					py: { xs: 3, md: 7 },
				}),

				...(variant === 'light' && {
					backgroundColor: theme.palette.background.default,
					color: theme.palette.background.dark,
				}),

				...(variant === 'dark' && {
					backgroundColor: theme.palette.background.dark,
					color: theme.palette.background.default,
				}),
				...(variant === 'default' && {
					backgroundColor: theme.palette.primary.main,
				}),
				...(variant === 'transparent' && {
					backgroundColor: 'transparent',
				}),

				...sx,
			})}
			{...props}>
			{children}
		</Box>
	);
}
