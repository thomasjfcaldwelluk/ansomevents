import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function PrivacyPolicy() {
	return (
		<PageWrapper>
			<SectionWrapper>
				<PageTitle pageHeader={'Privacy Policy'} />
			</SectionWrapper>
		</PageWrapper>
	);
}
