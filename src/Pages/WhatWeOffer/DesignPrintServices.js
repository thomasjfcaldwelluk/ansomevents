import React from 'react';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Grid, Typography } from '@mui/material';
import designPrintOne from '../../../src/Assets/Photos/DesignPrint/designPrintOne.webp';

export default function DesignPrintServices() {
	return (
		<Box
			component='main'
			id='design_print_services'
			aria-label='Design and Print Services'>
			<PageTitle
				pageHeader={'Design & Print'}
				pageSubheader={'Custom Creations for Your Event'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Bring your event to life with our bespoke design and print services.
					From personalized invitations to custom banners, we create stunning
					designs that reflect your unique style and theme. Our team works
					closely with you to ensure every detail is perfect, delivering high-
					quality prints that make a lasting impression. Whether it’s a small
					gathering or a grand celebration, our design and print services add a
					touch of elegance and professionalism to your event.
				</Typography>
				<Box>
					<Grid container spacing={2} sx={{ mt: 2, alignItems: 'center' }}>
						<Grid item size={{ xs: 12, md: 6 }}>
							<Box sx={{ p: { xs: 0, md: 2 }, height: '100%' }}>
								<Grid container spacing={2} sx={{ m: 2 }}>
									<Grid item size={6}>
										<Box>
											<Typography variant='p'>Whats In included</Typography>
											<Box component={'ul'}>
												<Typography component={'li'} variant='smallerP'>
													Fully custom invite design
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													Personalised to your theme
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													High-quality print-ready files
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													Optional printing available
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													Free design consultation
												</Typography>
											</Box>
										</Box>
									</Grid>
									<Grid item size={6}>
										<Box>
											<Typography>Add Ons</Typography>
											<Box component={'ul'}>
												<Typography component={'li'} variant='smallerP'>
													Table name cards
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													Menu Cards
												</Typography>
												<Typography component={'li'} variant='smallerP'>
													Thank you cards
												</Typography>
											</Box>
										</Box>
									</Grid>
								</Grid>
								<Typography component={'p'}>
									Message us to get started - we'll handle the design so you can
									start getting excited for the event!
								</Typography>
							</Box>
						</Grid>
						<Grid item size={{ xs: 12, md: 6 }}>
							<Box
								component='img'
								src={designPrintOne}
								alt='Design and Print Example'
								sx={{
									width: '100%',
									height: { xs: 250, md: '100%' },
									objectFit: 'cover',
									borderRadius: 2,
									boxShadow: 2,
									display: 'block',
								}}
							/>
						</Grid>
					</Grid>
				</Box>
			</LayoutWrapper>
		</Box>
	);
}
