import SectionHeader from 'Components/ui/Typography/SectionHeader';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Card,
	CardContent,
	Typography,
	Link,
	Grid,
	CardMedia,
} from '@mui/material';

export default function Features({ title, subtitle, items }) {
	return (
		<div>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<GridLayout>
				{items.map((item, index) => (
					<Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
						<Card variant='primary'>
							<CardContent>
								<CardMedia
									component='img'
									image={item.image}
									alt={item.title}
									sx={{
										transition: 'transform 0.4s ease',
										'&:hover': {
											transform: 'scale(1.05)',
										},
									}}
								/>
								<Typography>{item.title}</Typography>
								<Typography>{item.caption}</Typography>
								<Typography>{item.description}</Typography>
								<Link
									component={RouterLink}
									to={item.link}
									underline='hover'
									sx={{ mt: 2, display: 'inline-block' }}>
									View Packages →
								</Link>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</div>
	);
}
