import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { termsData, balloonTip } from './TermsConditionsData';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function TermsAndConditions() {
	return (
		<Box
			component={'main'}
			id='terms_and_conditions'
			aria-label='Terms And Conditions'>
			<Helmet>
				<title>Terms & Conditions | Ansom Events</title>
				<meta
					name='description'
					content='Read the terms and conditions for booking with Ansom Events. Learn about our policies on payments, cancellations, refunds, and event services.'
				/>
				<meta
					name='keywords'
					content='Ansom Events terms, booking policies, event terms, payment policy, cancellation policy, refund policy, event hire agreement'
				/>
				<meta property='og:title' content='Terms & Conditions | Ansom Events' />
				<meta
					property='og:description'
					content='Review our terms and conditions before booking your event. Find details on payments, cancellations, refunds, and hire policies.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/terms-and-conditions.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/terms-and-conditions'
				/>
				<link
					rel='canonical'
					href='https://ansomevents.com/terms-and-conditions'
				/>
			</Helmet>
			<PageTitle
				pageHeader={'Terms And Conditions'}
				pageSubheader={'All You Need To Know'}
			/>
			<LayoutWrapper>
				<Grid
					container
					sx={{
						display: 'flex',
						padding: 3,
					}}
					spacing={2}>
					<Grid item size={{ xs: 12, md: 6 }}>
						<Box>
							{termsData.map((data, index) => (
								<Box key={index}>
									<Typography
										variant='titleText'
										component={'p'}
										display={'inline'}>
										{data.id}:{'   '}
									</Typography>
									<Typography
										variant='smallerP'
										component={'p'}
										display={'inline'}>
										{data.term}
									</Typography>
								</Box>
							))}
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }}>
						<Box>
							{balloonTip.map((tips, index) => (
								<Box key={index}>
									<Typography variant='titleText' component={'p'}>
										{tips.id}:
									</Typography>
									<Typography variant='p' component={'p'}>
										{tips.tip}
									</Typography>
								</Box>
							))}
						</Box>
					</Grid>
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
