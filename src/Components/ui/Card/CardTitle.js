import React from 'react';
import { Typography } from '@mui/material';

export default function CardTitle({ children, ...props }) {
	return (
		<Typography
			variant='cardHeader'
			component='h3'
			sx={{ textAlign: 'center', marginTop: 1 }}
			gutterBottom
			{...props}>
			{children}
		</Typography>
	);
}
