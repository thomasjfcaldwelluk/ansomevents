import React from 'react';
import { Box } from '@mui/material';
import ChristmasCard from './ChristmasCard.js';
import ChristmasBanners from './ChristmasBanners.js';
import { LatestSpecialsContainer } from './LatestSpecialsStyles.js';
import PageTitle from '../../ReuseableComponents/PageTitle.js';

const LatestSpecials = () => {
	return (
		<>
			{/* Section 1: Portrait Image, Text, and Price */}
			<LatestSpecialsContainer container>
				<PageTitle
					pageHeader='Latest Specials'
					pageSubheader='Seasonal Decor Deals'
				/>
				<Box sx={{ padding: { xs: 2, lg: 5 } }}>
					<ChristmasCard />
					<ChristmasBanners />
				</Box>
			</LatestSpecialsContainer>
		</>
	);
};

export default LatestSpecials;
