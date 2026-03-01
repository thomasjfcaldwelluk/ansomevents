import React from 'react';
import { Box, Typography } from '@mui/material';
import faqData from '../../Data/Pages/faqData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function FrequentlyAskedQuestions() {
	return (
		<PageWrapper id='Ansom_Events_FAQS' aria-label='Ansom Events FAQS'>
			<PageTitle
				pageHeader={'FAQs'}
				pageSubheader={'All Your Question Answered'}
			/>
			{faqData.map((item, index) => (
				<Box key={index} mb={4}>
					<Typography variant='h2' gutterBottom>
						{item.question}
					</Typography>
					<Typography variant='body1'>{item.answer}</Typography>
				</Box>
			))}
		</PageWrapper>
	);
}
