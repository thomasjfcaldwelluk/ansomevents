import React from 'react';
import { Grid, Typography } from '@mui/material';
import faqData from '../../Data/Pages/faqData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SEO from 'Components/SEO';

export default function FrequentlyAskedQuestions() {
	return (
		<PageWrapper id='Ansom_Events_FAQS' aria-label='Ansom Events FAQS'>
			<SEO
				title='FAQs - Ansom Events'
				description='Find answers to your questions about our event planning services.'
				url='https://www.ansomevents.com/faqs'
				image='https://www.ansomevents.com/og-image.jpg'
			/>
			<SectionWrapper>
				<PageTitle
					pageHeader={'FAQs'}
					pageSubheader={'All Your Question Answered'}
				/>
			</SectionWrapper>
			<GridLayout spacing={0}>
				{faqData.map((item, index) => (
					<Grid size={{ xs: 12 }} key={index}>
						<CenterBox
							padding={2}
							flexDirection='column'
							alignItems='flex-start'>
							<Typography variant='body2' gutterBottom>
								{item.question}
							</Typography>
							<Typography variant='body1'>{item.answer}</Typography>
						</CenterBox>
					</Grid>
				))}
			</GridLayout>
		</PageWrapper>
	);
}
