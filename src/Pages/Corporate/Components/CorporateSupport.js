import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateSupport({
	id,
	title,
	intro,
	eventTypes,
	benefits,
	image,
	alt,
}) {
	return (
		<SectionWrapper id={id} variant='light'>
			<SectionHeader sectionHeader={title} />
			<Typography variant='body1' component={'p'} textAlign={'center'}>
				{intro}
			</Typography>
			<GridLayout>
				<Grid item size={{ xs: 12, md: 6 }}>
					<Box
						component={'img'}
						src={image}
						alt={alt}
						sx={{
							width: '100%',
							height: { xs: 260, md: 400 },
							objectFit: 'cover',
							borderRadius: 2,
						}}
					/>
				</Grid>
				<Grid
					item
					size={{ xs: 12, md: 6 }}
					sx={{
						backgroundColor: 'background.paper',
						padding: 2,
						borderRadius: 2,
					}}>
					<GridLayout spacing={1}>
						{eventTypes.map((type) => (
							<Grid item key={type} size={{ xs: 12, sm: 6 }}>
								<Card>
									<CardContent>
										<Typography variant='body1'>{type}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</GridLayout>
					<GridLayout spacing={1}>
						{benefits.map((benefit) => (
							<Grid item key={benefit} size={{ xs: 12, sm: 6 }}>
								<Card>
									<CardContent>
										<Typography variant='body1'>{benefit}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</GridLayout>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
