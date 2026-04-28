import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import { Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SEO from 'Components/SEO';

export default function LegalPage({ title, lastUpdated, sections }) {
	return (
		<PageWrapper>
			<SEO
				title={`${title} - Ansom Events`}
				description={`Read the ${title.toLowerCase()} for Ansom Events, outlining our policies and terms for using our services.`}
				url={`https://www.ansomevents.com/${title.toLowerCase().replace(/\s+/g, '-')}`}
				image='https://www.ansomevents.com/og-image.jpg'
			/>
			<SectionWrapper variant='light'>
				<PageTitle
					pageHeader={title}
					pageSubheader={`Last Updated: ${lastUpdated}`}
				/>
				<GridLayout>
					{sections.map((section, index) => (
						<Grid key={index} item xs={12}>
							<CenterBox
								flexDirection='column'
								alignItems='flex-start'
								padding={0}>
								<Typography variant='h6' component={'h3'}>
									{section.title}
								</Typography>
								<Typography variant='body1' component={'p'}>
									{section.content}
								</Typography>
							</CenterBox>
						</Grid>
					))}
				</GridLayout>
			</SectionWrapper>
		</PageWrapper>
	);
}
