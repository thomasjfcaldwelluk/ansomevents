import React from 'react';
import WeddingAddOns from './Components/WeddingAddOns';
import WeddingPackages from './Components/WeddingPackages';
import HelpWith from './Components/HelpWith';
import WeddingHero from './Components/WeddingHero';
import weddingData from '../../Data/Pages/weddingData';
import { Box } from '@mui/material';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function Weddings() {
	return (
		<Box
			component={'main'}
			id='weddings'
			aria-label='Weddings with Ansom Events'>
			<PageWrapper>
				<WeddingHero {...weddingData.hero} />
				<SectionWrapper id='wedding-help' variant='dark'>
					<HelpWith {...weddingData.helpWith} />
				</SectionWrapper>
				<SectionWrapper id='wedding-packages'>
					<WeddingPackages {...weddingData.packages} />
				</SectionWrapper>
				<SectionWrapper id='wedding-addons' variant='light'>
					<WeddingAddOns {...weddingData.addOns} />
				</SectionWrapper>
			</PageWrapper>
		</Box>
	);
}
