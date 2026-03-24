import { Box } from '@mui/material';
import React from 'react';

export default function CenterBox({
	children,
	padding = 2,
	display = 'flex',
	justifyContent = 'center',
	alignItems = 'center',
	width = '100%',

	...props
}) {
	return (
		<Box
			display={display}
			justifyContent={justifyContent}
			alignItems={alignItems}
			padding={padding}
			{...props}>
			{children}
		</Box>
	);
}
