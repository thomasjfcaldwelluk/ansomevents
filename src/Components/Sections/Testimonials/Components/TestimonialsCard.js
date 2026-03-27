import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Box,
	Avatar,
	Rating,
} from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SectionDivider from 'Components/ui/Divider/SectionDivider';

export default function TestimonialsCard({
	review,
	rating,
	name,
	event,
	image,
}) {
	return (
		<Card variant='primary'>
			<CardContent sx={{ padding: 4 }}>
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
				<CenterBox padding={0} justifyContent='flex-start'>
					<Typography>Read more</Typography>
					<Rating value={rating} readOnly />
				</CenterBox>
				<SectionDivider variant='gold' />
				<CenterBox
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						gap: 1,
						padding: 0,
					}}>
					<Avatar src={image} />
					<Box>
						<Typography variant='body2'>{name}</Typography>
						<Typography variant='body1'>{event}</Typography>
					</Box>
				</CenterBox>
			</CardContent>
		</Card>
	);
}
