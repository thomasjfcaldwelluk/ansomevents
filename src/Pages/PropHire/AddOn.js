import React from 'react';
import { Box, Typography } from '@mui/material';
import { addOnData } from '../DecorPackages/PackageData';
import Grid from '@mui/material/Grid2';

export default function AddOn() {
	return (
		<Box>
			<Typography variant='h4' component={'h4'} sx={{ textAlign: 'center' }}>
				Add On Decor
			</Typography>
			<Typography
				variant='introText'
				component={'p'}
				sx={{ width: '90%', margin: '0 auto' }}>
				Enhance your event with our stunning add-on décor! From elegant peacock
				chairs to stylish props, custom signs, and so much more, we have the
				perfect extras to complete your setup.
			</Typography>
			<Grid container sx={{ marginBlock: 4 }} spacing={2}>
				{addOnData.map((pkg, index) => (
					<Grid
						item
						key={index}
						size={{ xs: 12, sm: 6, md: 3 }}
						sx={{ backgroundColor: '#F2EFEA', padding: 2 }}>
						<Grid container sx={{ display: 'flex' }} spacing={1}>
							<Grid item width={'40%'}>
								<img src={pkg.image} alt={pkg.alt} width='100%' height='100%' />
							</Grid>
							<Grid item>
								<Typography component={'h5'} variant='h5'>
									{pkg.title}
								</Typography>
								<Typography component={'h5'} variant='h6'>
									£{pkg.price}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
