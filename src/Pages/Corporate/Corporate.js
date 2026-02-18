import { Box, Typography } from '@mui/material';
import React from 'react';

import corporateData from '../../Data/Pages/corporateData';
import CorporateHero from './Components/CorporateHero';
import CorporateTrust from './Components/CorporateTrust';
import CorporateServices from './Components/CorporateServices';
import CorporateEventTypes from './Components/CorporateEventTypes';
import CorporateWhyUs from './Components/CorporateWhyUs';
import CorporateCTA from './Components/CorporateCTA';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function Corporate() {
	return (
		<Box
			component='main'
			id='Ansom_Events_Corporate'
			aria-label='Main Corporate'>
			<PageWrapper>
				<PageTitle pageHeader='Corporate' pageSubheader='Come on Guys' />
				<CorporateHero {...corporateData.hero} />
				<CorporateTrust items={corporateData.trust} />
				<CorporateServices {...corporateData.services} />
				<CorporateEventTypes {...corporateData.eventTypes} />
				<CorporateWhyUs {...corporateData.whyUs} />
				<CorporateCTA {...corporateData.cta} />
			</PageWrapper>
		</Box>
	);
}
