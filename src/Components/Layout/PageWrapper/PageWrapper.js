import React from 'react';
import { Box } from '@mui/material';

export default function PageWrapper({ children, sx = {} }) {
	return (
		<Box
			component={'main'}
			sx={{
				width: '100%',
				maxWidth: '2000px',
				minWidth: '300px',
				mx: 'auto',

				...sx,
			}}>
			{children}
		</Box>
	);
}
