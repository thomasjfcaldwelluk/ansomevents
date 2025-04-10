import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import QuestionAndAnswers from './QuestionsAndAnswers';
import theme from '../../theme';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

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
			<PageTitle
				pageHeader={'FAQs'}
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
