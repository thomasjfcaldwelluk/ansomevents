import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function WeddingAddOns({ title, items }) {
	return (
		<div>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item, index) => (
					<Grid item key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<Card>
							<CardContent>
								<CardMedia src={item.image} alt={item.name} />
								<Typography variant='body1'>{item.name}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</div>
	);
}
