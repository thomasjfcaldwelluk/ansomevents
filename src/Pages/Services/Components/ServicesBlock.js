import { Card, CardContent, Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import CardTitle from 'Components/ui/Card/CardTitle';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import CardImage from 'Components/ui/Image/CardImage';

export default function ServiceBlock({ title, description, image, icon }) {
	return (
		<Grid item size={{ xs: 12, md: 4 }}>
			<Card variant='primary'>
				<CardImage image={image} alt={title} />
				<CardContent sx={{ padding: 3 }} gap={3}>
					<CardTitle>{title}</CardTitle>
					<CenterBox padding={1}>
						<IconWrapper Icon={icon} colorVariant='gold' size={45} />
					</CenterBox>
					<Typography variant='body1' fontWeight={550} sx={{ marginBlock: 2 }}>
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
