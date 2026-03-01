import React from 'react';
import Typography from '@mui/material/Typography';

export default function CardDescription({ children }) {
	return (
		<Typography
			variant='body1'
			component={'p'}
			color='text.secondary'
			sx={{
				maxWidth: 420,
				mx: 'auto',
			}}>
			{children}
		</Typography>
	);
}
