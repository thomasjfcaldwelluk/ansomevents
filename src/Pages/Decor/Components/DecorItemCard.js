import {
	Card,
	CardContent,
	Typography,
	Button,
	CardMedia,
	CardActions,
	Stack,
	Box,
} from '@mui/material';
import CardDescription from 'Components/ui/Card/CardDescription';
import CardTitle from 'Components/ui/Card/CardTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SectionDivider from 'Components/ui/Divider/SectionDivider';
export default function DecorItemCard({
	title,
	label,
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
			<CardContent
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Typography variant='label'>{label}</Typography>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				{includes && (
					<Stack>
						<SectionDivider variant='gold' />
						<Typography variant='label' sx={{ mb: 1 }}>
							What's Included
						</Typography>
						<Stack
							component='ul'
							sx={{
								listStyle: 'none',
								padding: 0,
								margin: 0,
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: '1fr 1fr',
								},
								gap: 1,
							}}>
							{includes.map((item) => (
								<Stack
									key={item.text}
									component='li'
									direction='row'
									spacing={1}
									alignItems='flex-start'>
									<CheckCircleOutlineIcon
										sx={{ fontSize: 18, mt: '3px', color: 'primary.light' }}
									/>

									<Typography
										variant='body1'
										sx={{
											fontWeight: item.weight === 'bold' ? 700 : 400,
										}}>
										{item.text}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				)}
				<Box sx={{ mt: 'auto' }}>
					<SectionDivider variant='gold' />
					{price && (
						<Typography
							variant='body2'
							component='p'
							sx={{ mt: 2, textAlign: 'center' }}>
							{price.display}
						</Typography>
					)}
					{cta && (
						<CardActions sx={{ justifyContent: 'center' }}>
							<Button variant='secondary'>{cta.label}</Button>
						</CardActions>
					)}
				</Box>
			</CardContent>
		</Card>
	);
}
