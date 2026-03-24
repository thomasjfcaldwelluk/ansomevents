import React from 'react';
import { Box, Typography } from '@mui/material';
import faqData from '../../Data/Pages/faqData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';

export default function FrequentlyAskedQuestions() {
	return (
		<PageWrapper id='Ansom_Events_FAQS' aria-label='Ansom Events FAQS'>
			<SectionWrapper>
				<PageTitle
					pageHeader={'FAQs'}
					pageSubheader={'All Your Question Answered'}
				/>
			</SectionWrapper>
			{faqData.map((item, index) => (
				<CenterBox
					key={index}
					padding={3}
					flexDirection='column'
					alignItems='flex-start'>
					<Typography variant='body2' gutterBottom>
						{item.question}
					</Typography>
					<Typography variant='body1'>{item.answer}</Typography>
				</CenterBox>
			))}
		</PageWrapper>
	);
}
