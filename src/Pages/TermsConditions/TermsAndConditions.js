import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { termsData, balloonTip } from './TermsConditionsData';
import theme from '../../theme';
import { Helmet } from 'react-helmet-async';

export default function TermsAndConditions() {
	return (
		<Box sx={{ backgroundColor: theme.palette.primaryBackground.main }}>
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
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Typography variant='h3' component={'h3'}>
					Terms And Conditions
				</Typography>
			</Box>
			<Grid
				container
				sx={{
					display: 'flex',
					padding: 3,
				}}
				spacing={2}>
				<Grid
					item
					size={{ xs: 12, md: 6 }}
					sx={{
						backgroundColor: theme.palette.primaryBackground.secondary,
						padding: 2,
						borderRadius: '4px',
					}}>
					<Box>
						{termsData.map((data, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.25rem' }}>
								<Typography
									sx={{
										margin: '0 1rem',
										color: theme.palette.primaryText.main,
									}}
									variant='p'
									component={'p'}>
									{data.id}:
								</Typography>
								<Typography
									variant='p'
									component={'p'}
									sx={{
										textAlign: 'left',
										fontWeight: 600,
										color: theme.palette.primaryText.main,
									}}>
									{data.term}
								</Typography>
							</Box>
						))}
					</Box>
				</Grid>
				<Grid
					item
					size={{ xs: 12, md: 6 }}
					sx={{
						padding: 2,
						backgroundColor: theme.palette.primaryBackground.secondary,
					}}>
					<Box>
						{balloonTip.map((tips, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.25rem' }}>
								<Typography sx={{ margin: '0 1rem' }}>{tips.id}:</Typography>
								<Typography>{tips.tip}</Typography>
							</Box>
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
