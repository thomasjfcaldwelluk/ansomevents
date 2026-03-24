import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function TermsOfService() {
	return (
		<PageWrapper>
			<SectionWrapper>
				<PageTitle pageHeader={'Terms of Service'} />
			</SectionWrapper>
		</PageWrapper>
	);
}
