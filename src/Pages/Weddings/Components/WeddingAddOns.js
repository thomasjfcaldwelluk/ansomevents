import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function WeddingAddOns({ title, items }) {
	return (
		<SectionWrapper id='weddings-add-ons' variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item, index) => (
					<Grid item key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<Card>
							<CardMedia src={item.image} alt={item.name} variant='standard' />
							<CardContent sx={{ flexGrow: 1 }}>
								<CardTitle>{item.name}</CardTitle>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
