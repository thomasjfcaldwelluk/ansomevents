import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import QuestionAndAnswers from './QuestionsAndAnswers';
import theme from '../../theme';
import SectionHeader from '../../ReuseableComponents/SectionHeader';

const faqStyles = {
	faqContainer: {
		backgroundColor: theme.palette.primaryBackground.main,
		padding: 1,
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
		<Box component={'main'} className='Ansom_Events_FAQS'>
			<Grid container sx={{ ...faqStyles.faqContainer }}>
				<SectionHeader
					sectionHeader='Have a Question?'
					sectionSubheader='Read Our FAQs'
					color={theme.palette.primaryHeader.main}
				/>
				<Grid item size={{ xs: 12 }} sx={{ ...faqStyles.contentContainer }}>
					<Box sx={{ ...faqStyles.textContainer }}>
						<Typography
							variant='p'
							component='p'
							sx={{
								color: theme.palette.primaryText.main,
								fontWeight: 450,
							}}>
							Explore our FAQs for quick answers to common questions. If you
							don’t find what you’re looking for, feel free to contact us—we’re
							here to help and provide personalized support!
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Box>
				<QuestionAndAnswers />
			</Box>
		</Box>
	);
}
