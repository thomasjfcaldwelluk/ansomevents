import SectionHeader from 'Components/ui/Typography/SectionHeader';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
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
import CardTitle from 'Components/ui/Card/CardTitle';

export default function Features({ title, subtitle, items }) {
	return (
		<SectionWrapper id='features' aria-label={title}>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<GridLayout spacing={0}>
				{items.map((item, index) => (
					<Grid key={index} size={{ xs: 12, lg: 6 }}>
						<Card variant='transparent' sx={{ height: '100%' }}>
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
								<CardTitle>{item.title}</CardTitle>
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
		</SectionWrapper>
	);
}
