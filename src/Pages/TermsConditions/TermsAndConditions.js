import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { termsData } from './TermsConditionsData';
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
				<Box>
					{termsData.map((term) => (
						<Box key={term.id} sx={{ mb: 4 }}>
							<Typography variant='h3' sx={{ fontWeight: 'bold', mb: 2 }}>
								{term.title || `Term ${term.id}`}
							</Typography>
							{Array.isArray(term.term) ? (
								<Typography variant='body1'>
									{term.term.map((t, index) => (
										<Box key={index} sx={{ mb: 1 }}>
											{t}
										</Box>
									))}
								</Typography>
							) : (
								<Typography variant='body1'>{term.term}</Typography>
							)}
						</Box>
					))}
				</Box>
			</LayoutWrapper>
		</Box>
	);
}
