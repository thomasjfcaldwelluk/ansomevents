import React, { useState } from 'react';
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
	const [expanded, setExpanded] = useState(false);
	return (
		<Card variant='primary'>
			<CardContent sx={{ padding: 4 }}>
				<Typography
					variant='body1'
					sx={{
						display: expanded ? 'block' : '-webkit-box',
						WebkitLineClamp: expanded ? 'unset' : 3,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
					}}>
					{review}
				</Typography>
				<CenterBox
					sx={{
						marginBlock: 2,
						justifyContent: 'space-between',
						gap: 1,
						padding: 0,
					}}>
					<Rating value={rating} readOnly />
					<Typography
						variant='body1'
						fontWeight={550}
						sx={{ cursor: 'pointer' }}
						onClick={() => setExpanded((prev) => !prev)}>
						{expanded ? 'Show less' : 'Read more'}
					</Typography>
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
