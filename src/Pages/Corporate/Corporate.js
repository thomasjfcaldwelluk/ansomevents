import React from 'react';
import corporateData from '../../Data/Pages/corporateData';
import CorporateHero from './Components/CorporateHero';
import CorporateTrust from './Components/CorporateTrust';
import CorporateServices from './Components/CorporateServices';
import CorporateEventTypes from './Components/CorporateEventTypes';
import CorporateWhyUs from './Components/CorporateWhyUs';
import CorporateCTA from './Components/CorporateCTA';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Corporate() {
	return (
		<PageWrapper id='ansom_events_corporate' aria-label='Main Corporate'>
			<CorporateHero {...corporateData.hero} />
			<CorporateTrust items={corporateData.trust} />
			<CorporateServices {...corporateData.services} />
			<CorporateEventTypes {...corporateData.eventTypes} />
			<CorporateWhyUs {...corporateData.whyUs} />
			<CorporateCTA {...corporateData.cta} />
		</PageWrapper>
	);
}
