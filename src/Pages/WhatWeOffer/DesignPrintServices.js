import React from 'react';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Typography } from '@mui/material';

export default function DesignPrintServices() {
	return (
		<Box
			component='main'
			id='design_print_services'
			aria-label='Design and Print Services'>
			<PageTitle
				pageHeader={'Design and Print Services'}
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
			</LayoutWrapper>
		</Box>
	);
}
