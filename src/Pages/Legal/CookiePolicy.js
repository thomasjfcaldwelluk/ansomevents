import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function CookiePolicy() {
	return (
		<PageWrapper>
			<SectionWrapper>
				<PageTitle pageHeader={'Cookie Policy'} />
			</SectionWrapper>
		</PageWrapper>
	);
}
