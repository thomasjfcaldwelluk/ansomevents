import React from 'react';
import { Box, Typography } from '@mui/material';
import { addOnData } from './PackageData';
import Grid from '@mui/material/Grid2';
import theme from '../../theme';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function AddOn() {
	return (
		<Box
			component='main'
			id='add_on_props'
			aria-label='Add ons At Ansom Events'>
			<LayoutWrapper>
				<Typography variant='h4' component={'h4'} sx={{ textAlign: 'center' }}>
					Add On Decor
				</Typography>
				<Typography variant='introText' component={'p'}>
					Enhance your event with our stunning add-on décor! From elegant
					peacock chairs to stylish props, custom signs, and so much more, we
					have the perfect extras to complete your setup.
				</Typography>
				<Grid container sx={{ marginBlock: 4 }} spacing={2}>
					{addOnData.map((pkg, index) => (
						<Grid
							item
							key={index}
							size={{ xs: 12, sm: 6, md: 3 }}
							sx={{ backgroundColor: '#F2EFEA', padding: 2 }}>
							<Box>
								<Box>
									<img
										src={pkg.image}
										alt={pkg.alt}
										width='100%'
										height='100%'
									/>
								</Box>
								<Box>
									<Typography component={'h3'} variant='productTitle'>
										{pkg.title}
									</Typography>
									<Typography component={'h4'} variant='titleText'>
										£{pkg.price}
									</Typography>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
