import React from 'react';
import { Box } from '@mui/material';

export default function LayoutWrapper({ children, sx = {} }) {
	return (
		<Box
			component={'section'}
			sx={{
				width: '80%',
				maxWidth: '1440px',
				minWidth: '300px',
				mx: 'auto',
				my: 4,
				...sx, // allows overrides or custom spacing per page
			}}>
			{children}
		</Box>
	);
}
