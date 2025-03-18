import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import theme from '../../theme';
import easterParty from './EventsAssets/easterParty.png';

export default function EventsMain() {
	return (
		<Box
			component={'main'}
			sx={{
				backgroundColor: theme.palette.primaryBackground.main,
				padding: 2,
			}}>
			<PageTitle
				pageHeader='Upcoming Events'
				pageSubheader='With Ansom Events'
			/>
			<Grid container padding={6} justifyContent={'center'}>
				<Grid size={{ xs: 12, md: 8 }}>
					<Box paddingBlock={5}>
						<Typography variant='h3' component={'h3'} gutterBottom>
							Easter Fun at Saltash Football Club! 🐰🎉
						</Typography>
						<Typography variant='h5' component={'h5'} gutterBottom>
							Join us for a fantastic Easter event on{' '}
							<strong>April 16th, 2025, from 11 AM - 12:30 PM</strong> at
							Saltash Football Club!
						</Typography>

						<Box sx={{ textAlign: 'left', my: 3 }}>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								🎟 What’s Included?
							</Typography>
							<Box>
								<Typography variant='p'>
									🐰 <strong>Meet & Greet with the Easter Bunny</strong> – A
									perfect photo opportunity!
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎶 <strong>Bunny Hop Dance Party</strong> – Get ready to
									groove!
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎨 <strong>Easter Cookie Painting</strong> – Unleash
									creativity with festive treats.
								</Typography>
							</Box>
							<Box>
								<Typography variant='p'>
									🎁 <strong>A Special Treat from the Easter Bunny</strong> – A
									little surprise for every child!
								</Typography>
							</Box>
						</Box>

						<Box sx={{ textAlign: 'left', my: 3 }}>
							<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
								🎟 Tickets & Booking
							</Typography>
							<Typography variant='p'>
								<strong>Price:</strong> £7.50 per child (
								<strong>Adults go FREE!</strong>)
							</Typography>
							<Typography variant='p' color='error'>
								<strong>
									Presale tickets only – No tickets available at the door.
								</strong>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item size={{ xs: 12, md: 4 }}>
					<Box component={'img'} src={easterParty} sx={{ width: '100%' }} />
				</Grid>
			</Grid>
		</Box>
	);
}
