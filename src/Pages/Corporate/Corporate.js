import React from 'react';
import corporateData from '../../Data/Pages/corporateData';
import CorporateHero from './Components/CorporateHero';
import CorporateTrust from './Components/CorporateTrust';
import CorporateServices from './Components/CorporateServices';
import CorporateCTA from './Components/CorporateCTA';
import CorporateSupport from './Components/CorporateSupport';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Corporate() {
	return (
		<PageWrapper id='ansom_events_corporate' aria-label='Main Corporate'>
			<CorporateHero {...corporateData.hero} />
			{/* <CorporateTrust items={corporateData.trust} /> */}
			<CorporateServices {...corporateData.services} />
			<CorporateSupport {...corporateData.support} />
			<CorporateCTA {...corporateData.cta} />
		</PageWrapper>
	);
}
