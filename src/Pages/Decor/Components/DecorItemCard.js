import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	CardMedia,
} from '@mui/material';
import CardDescription from 'Components/ui/Card/CardDescription';
import CardTitle from 'Components/ui/Card/CardTitle';

export default function DecorItemCard({
	title,
	image,
	description,
	includes,
	price,
	cta,
	imageVariant = 'standard',
}) {
	return (
		<Card variant='primary'>
			{image && (
				<CardMedia
					component='img'
					src={image}
					alt={title}
					variant={imageVariant}
				/>
			)}
			<CardContent sx={{ flexGrow: 1 }}>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>

				{includes && (
					<Box component='ul' sx={{ pl: 2, mb: 2 }}>
						{includes.map((item, idx) => (
							<li key={idx}>
								<Typography
									component='span'
									sx={{ fontWeight: item.weight === 'bold' ? 700 : 400 }}>
									{item.text}
								</Typography>
							</li>
						))}
					</Box>
				)}

				{price && (
					<Typography variant='h6' sx={{ mt: 2 }}>
						{price.display}
					</Typography>
				)}
				{cta && (
					<Button variant='secondary' sx={{ mt: 2 }}>
						{cta.label}
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
