import React from 'react';
import { List, ListItem, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { backdropData } from './PackageData';

export default function Backdrops() {
	return (
		<Box>
			<Typography sx={{ textAlign: 'center' }} component={'h4'} variant='h4'>
				Backdrops
			</Typography>
			<Typography
				variant='introText'
				component={'p'}
				sx={{ width: '90%', marginBlock: 2, marginInline: 'auto' }}>
				If you’re looking for just a backdrop, we’ve got you covered! Choose
				from shimmer, fringe, or classic plain white. We also offer hoop
				designs—full or half—for a stunning event feature!
			</Typography>
			<Grid container spacing={3} marginBlock={2} padding={2}>
				{backdropData.map((pkg, index) => (
					<Grid
						key={index}
						item
						marginBlock={1}
						size={{ xs: 12, md: 4 }}
						sx={{
							backgroundColor: '#F2EFEA',
							padding: 2,
							borderRadius: 4,
						}}>
						<Grid item>
							<Box
								component={'img'}
								src={pkg.image}
								alt={pkg.alt}
								sx={{ width: '100%', borderRadius: 2 }}
							/>
						</Grid>
						<Grid item size={{ xs: 12, md: 8 }}>
							<Typography component={'h4'} variant='h4'>
								{pkg.title}
							</Typography>
							<Typography component={'p'} variant='descriptionText'>
								{pkg.description}
							</Typography>
							<List>
								{pkg.included.map((item, itemIndex) => (
									<ListItem key={itemIndex} sx={{ padding: 0 }}>
										<Typography padding={0} variant='listText' component='p'>
											-{item}
										</Typography>
									</ListItem>
								))}
							</List>
							<Typography component={'h5'} variant='h5'>
								{' '}
								{pkg.price}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
