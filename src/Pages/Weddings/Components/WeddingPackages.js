import React from 'react';
import { Grid, Card, CardContent, Typography, Stack } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LuxuryDivider from 'Components/ui/Divider/LuxuryDivider';

export default function WeddingPackages({ title, items }) {
	return (
		<SectionWrapper id='wedding-packages' variant='dark'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((pkg) => (
					<Grid key={pkg.id} size={{ xs: 12, md: 4 }}>
						<Card variant='primary'>
							<CardContent sx={{ flexGrow: 1, padding: 3 }}>
								<Typography variant='label'>{pkg.label}</Typography>
								<CardTitle>{pkg.name}</CardTitle>
								<Typography
									variant='body2'
									component={'h4'}
									sx={{ mb: 2, textAlign: 'center' }}>
									{pkg.price.display}
								</Typography>
								<LuxuryDivider />
								<Stack
									component='ul'
									sx={{ listStyle: 'none', padding: 0, margin: 0, gap: 1 }}>
									{pkg.includes.map((item, index) => (
										<Stack
											key={index}
											direction='row'
											alignItems='center'
											spacing={1}>
											<CheckCircleOutlineIcon
												sx={{ fontSize: 18, mt: '3px', color: 'primary.light' }}
											/>
											<Typography
												variant='body1'
												component='li'
												sx={{
													fontWeight: item.bold ? 700 : 400,
												}}>
												{item.text}
											</Typography>
										</Stack>
									))}
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
