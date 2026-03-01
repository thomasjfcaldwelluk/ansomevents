import React from 'react';
import Box from '@mui/material/Box';

export default function IconWrapper({
	Icon,
	colorVariant = 'primary',
	size = 40,
}) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: (theme) => {
					const map = {
						primary: theme.palette.primary.main,
						gold: theme.palette.brand.accentGold,
						charcoal: theme.palette.brand.charcoal,
						muted: theme.palette.text.secondary,
					};
					return map[colorVariant];
				},
			}}>
			<Icon sx={{ fontSize: size }} width={size} height={size} />
		</Box>
	);
}
