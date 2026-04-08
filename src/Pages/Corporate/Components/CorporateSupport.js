import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
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
			<SectionHeader sectionHeader={title} subHeader={intro} />
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
						padding: 1,
						borderRadius: 2,
					}}>
					<GridLayout spacing={1}>
						<Grid item size={{ xs: 12 }}>
							<Typography variant='h6' fontWeight={600} textAlign={'center'}>
								Types of Corporate Events We Support:
							</Typography>
						</Grid>
						{eventTypes.map((type) => (
							<Grid item key={type} size={{ xs: 12, sm: 6 }}>
								<Card variant='primary'>
									<CardContent>
										<Typography
											variant='body1'
											component={'p'}
											textAlign={'center'}
											marginTop={1}>
											{type}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</GridLayout>
					<GridLayout spacing={1}>
						<Grid item size={{ xs: 12 }}>
							<Typography variant='h6' fontWeight={600} textAlign={'center'}>
								Benefits of Choosing Ansom Events:
							</Typography>
						</Grid>
						{benefits.map((benefit) => (
							<Grid item key={benefit} size={{ xs: 12, sm: 6 }}>
								<Card variant='primary'>
									<CardContent>
										<Typography
											variant='body1'
											component={'p'}
											textAlign={'center'}
											marginTop={1}>
											{benefit}
										</Typography>
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
