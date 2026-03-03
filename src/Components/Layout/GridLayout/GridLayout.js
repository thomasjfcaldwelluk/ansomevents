import { Grid } from '@mui/material';

export default function GridLayout({
	children,
	spacing = 5,
	alignItems = 'stretch',
	padding = 1,
	...props
}) {
	return (
		<Grid
			container
			spacing={spacing}
			alignItems={alignItems}
			padding={padding}
			{...props}>
			{children}
		</Grid>
	);
}
