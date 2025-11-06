import React from 'react';
import { Box, Typography } from '@mui/material';
import QuestionAndAnswers from './QuestionsAndAnswers';
import theme from '../../theme';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Helmet } from 'react-helmet-async';

const faqStyles = {
	faqContainer: {
		backgroundColor: theme.palette.primaryBackground.main,
	},
	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	iconContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
	},
	icon: {
		fontSize: { xs: 25, md: 50 },
		color: theme.palette.primaryAccent.secondary,
	},
	contentButton: {
		backgroundColor: theme.palette.primaryBackground.main,
		color: theme.palette.primaryText.main,
	},
	textContainer: {
		marginBlock: '1rem',
	},
};

export default function FrequentlyAskedQuestions() {
	return (
		<Box
			component={'main'}
			id='Ansom_Events_FAQS'
			aria-label='Ansom Events FAQS'>
			<Helmet>
				<title>
					Ansom Events FAQs | Wedding & Corporate Event Planning Questions
				</title>

				<meta
					name='description'
					content='Got questions about wedding planning, corporate events, décor, or prop hire in Cornwall & Devon? Explore our FAQs for clear answers and expert guidance from Ansom Events.'
				/>

				<link rel='canonical' href='https://ansomevents.com/faqs' />

				{/* Open Graph / Social */}
				<meta
					property='og:title'
					content='Ansom Events FAQs | Event Planning Made Simple'
				/>
				<meta
					property='og:description'
					content='Answers to the most common questions about wedding planning, corporate event coordination, décor packages, and prop hire across Cornwall & Devon.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/homepage-brand-hero.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/faqs' />

				{/* Twitter */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Ansom Events FAQs' />
				<meta
					name='twitter:description'
					content='Everything you need to know about booking décor, prop hire, and planning support in Cornwall & Devon.'
				/>
				<meta
					name='twitter:image'
					content='https://ansomevents.com/images/homepage-brand-hero.jpg'
				/>
			</Helmet>
			<PageTitle
				pageHeader={'Frequently Asked Questions'}
				pageSubheader={'Your Questions Answered'}
			/>
			<LayoutWrapper>
				<Box sx={{ ...faqStyles.faqContainer }}>
					<Box sx={{ ...faqStyles.contentContainer }}>
						<Box sx={{ ...faqStyles.textContainer }}>
							<Typography component='p' variant='titleText'>
								Explore our FAQs for quick answers to common questions. If you
								don’t find what you’re looking for, feel free to contact
								us—we’re here to help and provide personalized support!
							</Typography>
						</Box>
					</Box>
				</Box>
				<QuestionAndAnswers />
			</LayoutWrapper>
		</Box>
	);
}
