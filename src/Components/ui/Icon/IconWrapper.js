import React from 'react';
import Box from '@mui/material/Box';

export default function IconWrapper({
	Icon,
	colorVariant = 'primary',
	size = 40,
}) {
	return (
		<Box
			sx={(theme) => {
				const map = {
					primary: theme.palette.primary.main,
					gold: theme.palette.brand.accentGold,
					charcoal: theme.palette.brand.charcoal,
					muted: theme.palette.text.secondary,
				};

				return {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: map[colorVariant],
					transition: 'all 0.2s ease',

					'&:hover': {
						transform: 'translateY(-2px)',
						color: theme.palette.primary.main,
					},
				};
			}}>
			<Icon
				sx={{ fontSize: size, filter: 'drop-shadow(0 0 0.5px colorVariant)' }}
				width={size}
				height={size}
			/>
		</Box>
	);
}
