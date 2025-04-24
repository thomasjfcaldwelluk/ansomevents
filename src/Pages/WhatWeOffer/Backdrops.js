import React from 'react';
import { List, ListItem, Box, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { backdropData } from './PackageData';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function Backdrops() {
	return (
		<Box component='main' id='backdrops' aria-label='Backdrops At Ansom Events'>
			<PageTitle
				pageHeader={'Backdrops'}
				pageSubheader={'Great Photo Ops For Your Event'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					If you’re looking for just a backdrop, we’ve got you covered! Choose
					from shimmer, fringe, or classic plain white. We also offer hoop
					designs—full or half—for a stunning event feature!
				</Typography>
				<Grid container spacing={3} marginBlock={2}>
					{backdropData.map((pkg, index) => (
						<Grid key={index} item size={{ xs: 12, md: 4 }}>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									backgroundColor: '#F2EFEA',
									padding: 2,
									borderRadius: 4,
								}}>
								{/* Image */}
								<Box
									component={'img'}
									src={pkg.image}
									alt={pkg.alt}
									sx={{ width: '100%', borderRadius: 2, mb: 2 }}
								/>

								{/* Content Section */}
								<Box sx={{ flexGrow: 1 }}>
									<Typography component='h4' variant='h4'>
										{pkg.title}
									</Typography>
									<Typography component='p' variant='p'>
										{pkg.description}
									</Typography>
									<List>
										{pkg.included.map((item, itemIndex) => (
											<ListItem key={itemIndex} sx={{ py: 0 }}>
												<Typography
													component='p'
													variant='p'
													sx={{ fontWeight: 600 }}>
													- {item}
												</Typography>
											</ListItem>
										))}
									</List>
								</Box>

								{/* Price (at bottom) */}
								<Typography component='h5' variant='titleText' sx={{ mt: 2 }}>
									{pkg.price}
								</Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
