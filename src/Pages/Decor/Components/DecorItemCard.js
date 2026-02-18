import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function DecorItemCard({
	title,
	image,
	description,
	includes,
	price,
	cta,
}) {
	return (
		<Card variant='primary'>
			<CardContent>
				{image && (
					<img
						src={image}
						alt={title}
						style={{
							width: '100%',
							height: '400px',
							objectFit: 'cover',
							borderRadius: 8,
						}}
					/>
				)}
				<Typography variant='h5' gutterBottom>
					{title}
				</Typography>

				<Typography variant='body2' sx={{ mb: 2 }}>
					{description}
				</Typography>

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
