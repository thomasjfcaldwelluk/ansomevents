import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	Avatar,
	Rating,
} from '@mui/material';

export default function TestimonialsCard({
	review,
	rating,
	name,
	event,
	image,
}) {
	return (
		<Card variant='primary'>
			<CardContent>
				<Typography
					variant='body1'
					sx={{
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}>
					{review}
				</Typography>
				<Button size='small' sx={{ mt: 1 }}>
					Read more
				</Button>
				<Rating value={rating} readOnly sx={{ mt: 1 }} />
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
					<Avatar src={image} />
					<Box>
						<Typography fontWeight={600}>{name}</Typography>
						<Typography variant='caption'>{event}</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
