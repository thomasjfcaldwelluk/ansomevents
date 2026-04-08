import { Card, CardContent, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import SectionDivider from 'Components/ui/Divider/SectionDivider';
import CardImage from 'Components/ui/Image/CardImage';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function WeddingAddOns({ title, intro, items }) {
	return (
		<SectionWrapper id='weddings-add-ons' variant='light'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout>
				{items.map((item) => (
					<Grid item key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<Card variant='primary'>
							<CardImage image={item.image} alt={item.alt} />
							<CardContent sx={{ flexGrow: 1, mt: 'auto' }}>
								<CardTitle>{item.name}</CardTitle>
								<SectionDivider variant='gold' />
								<Typography
									variant='body2'
									component='p'
									sx={{ textAlign: 'center' }}>
									{item.price.display}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
