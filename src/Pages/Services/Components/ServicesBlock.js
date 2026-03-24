import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import CardTitle from 'Components/ui/Card/CardTitle';
import IconWrapper from 'Components/ui/Icon/IconWrapper';

export default function ServiceBlock({ title, description, image, icon }) {
	return (
		<Grid item size={{ xs: 12, md: 4 }}>
			<Card>
				<CardMedia component='img' image={image} alt={title} height={200} />
				<CardContent>
					<CardTitle>{title}</CardTitle>
					<IconWrapper Icon={icon} colorVariant='gold' />
					<Typography variant='body2'>{description}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
