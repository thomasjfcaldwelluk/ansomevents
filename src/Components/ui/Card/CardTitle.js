import React from 'react';
import { Typography } from '@mui/material';

export default function CardTitle({ children, ...props }) {
	return (
		<Typography
			variant='h5'
			component='h3'
			sx={{ textAlign: 'center' }}
			gutterBottom
			{...props}>
			{children}
		</Typography>
	);
}
