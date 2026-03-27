import SectionHeader from 'Components/ui/Typography/SectionHeader';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	CardMedia,
	Button,
} from '@mui/material';
import CardTitle from 'Components/ui/Card/CardTitle';

export default function Features({ title, subtitle, items }) {
	return (
		<SectionWrapper id='features' aria-label={title}>
			<SectionHeader sectionHeader={title} subHeader={subtitle} />
			<GridLayout spacing={0}>
				{items.map((item, index) => (
					<Grid key={index} size={{ xs: 12, lg: 6 }}>
						<Card variant='transparent' sx={{ height: '100%' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<CardMedia
									component='img'
									image={item.image}
									alt={item.title}
									sx={{
										borderRadius: 2,
										height: 300,
										width: '75%',
										transition: 'transform 0.4s ease',
										'&:hover': {
											transform: 'scale(1.05)',
										},
									}}
								/>
								<CardTitle>{item.title}</CardTitle>
								<Typography
									sx={{ textAlign: 'center' }}
									variant='body2'
									component={'p'}>
									{item.caption}
								</Typography>
								<Button
									sx={{ marginBlock: 2 }}
									variant='primary'
									component={RouterLink}
									to={item.link}
									underline='hover'>
									More Information →
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
