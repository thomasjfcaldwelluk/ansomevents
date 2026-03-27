import React from 'react';
import Typography from '@mui/material/Typography';

export default function CardDescription({ children, sx }) {
	return (
		<Typography variant='body1' component={'p'} sx={{ ...sx }}>
			{children}
		</Typography>
	);
}
