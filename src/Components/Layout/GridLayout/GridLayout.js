import { Grid } from '@mui/material';

export default function GridLayout({
	children,
	spacing = 4,
	alignItems = 'stretch',
	...props
}) {
	return (
		<Grid container spacing={spacing} alignItems={alignItems} {...props}>
			{children}
		</Grid>
	);
}
