import React from 'react';
import { Box } from '@mui/material';

export default function PageWrapper({ children, sx = {} }) {
	return (
		<Box
			component={'section'}
			sx={{
				width: 'calc(100% - 20px)',
				maxWidth: '1600px',
				minWidth: '300px',
				mx: 'auto',
				my: 4,
				...sx, // allows overrides or custom spacing per page
			}}>
			{children}
		</Box>
	);
}
