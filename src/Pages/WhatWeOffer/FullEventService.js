import React from 'react';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Typography } from '@mui/material';

export default function FullEventService() {
	return (
		<Box
			component='main'
			id='Full_Event_Service'
			aria-label='Full Event Service'>
			<PageTitle
				pageHeader={'Full Event Service'}
				pageSubheader={'Event Styling and Coordination'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Our Full Event Service is designed for those who want a seamless,
					stress-free event experience. From initial consultation to the final
					touches, we handle every detail of your event planning and styling.
					Whether it’s a wedding, corporate event, or private party, our team
					will work with you to create a stunning atmosphere that reflects your
					vision and exceeds your expectations.
				</Typography>
			</LayoutWrapper>
		</Box>
	);
}
