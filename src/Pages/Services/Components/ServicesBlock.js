import { Grid } from '@mui/material';

export default function ServiceBlock({ type, title, description, image }) {
	return (
		<Grid item size={{ xs: 12, md: 4 }}>
			{title}
		</Grid>
	);
}
