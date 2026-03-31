import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import CardTitle from 'Components/ui/Card/CardTitle';
import IconWrapper from 'Components/ui/Icon/IconWrapper';

export default function ServiceBlock({ title, description, image, icon }) {
	return (
		<Grid item size={{ xs: 12, md: 4 }}>
			<Card variant='primary'>
				<CardMedia component='img' image={image} alt={title} height={250} />
				<CardContent sx={{ height: '100%', padding: 3 }}>
					<CardTitle>{title}</CardTitle>
					<IconWrapper Icon={icon} colorVariant='gold' size={45} />
					<Typography variant='body1' fontWeight={550} sx={{ marginBlock: 2 }}>
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
