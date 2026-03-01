import React from 'react';
import WeddingAddOns from './Components/WeddingAddOns';
import WeddingPackages from './Components/WeddingPackages';
import HelpWith from './Components/HelpWith';
import WeddingHero from './Components/WeddingHero';
import weddingData from '../../Data/Pages/weddingData';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';

export default function Weddings() {
	return (
		<PageWrapper id='weddings' aria-label='Weddings with Ansom Events'>
			<WeddingHero {...weddingData.hero} />
			<HelpWith {...weddingData.helpWith} />
			<WeddingPackages {...weddingData.packages} />
			<WeddingAddOns {...weddingData.addOns} />
		</PageWrapper>
	);
}
