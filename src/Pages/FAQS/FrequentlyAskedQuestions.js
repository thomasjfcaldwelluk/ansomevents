import React from 'react';
import { Box, Typography } from '@mui/material';
import faqData from '../../Data/Pages/faqData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function FrequentlyAskedQuestions() {
	return (
		<Box
			component={'main'}
			id='Ansom_Events_FAQS'
			aria-label='Ansom Events FAQS'>
			<PageWrapper>
				<Typography variant='h1' align='center' gutterBottom>
					Frequently Asked Questions
				</Typography>
				{faqData.map((item, index) => (
					<Box key={index} mb={4}>
						<Typography variant='h2' gutterBottom>
							{item.question}
						</Typography>
						<Typography variant='body1'>{item.answer}</Typography>
					</Box>
				))}
			</PageWrapper>
		</Box>
	);
}
