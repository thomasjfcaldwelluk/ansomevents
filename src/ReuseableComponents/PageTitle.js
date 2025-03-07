import React from 'react';
import {
	PageTitleContainer,
	PageHeader,
	PageSubheader,
} from './ReuseableComponentsStyles/PageTitleStyles';

export default function PageTitle({
	pageHeader,
	pageSubheader,
	color = 'white',
}) {
	return (
		<PageTitleContainer spacing={1}>
			<PageHeader
				variant='h1'
				component={'h1'}
				sx={{
					color,
					fontSize: { xs: '18.5px', md: '23px', lg: '30px' },
					fontFamily: 'Playfair',
				}}>
				{pageHeader}
			</PageHeader>
			<PageSubheader
				variant='h2'
				component={'h2'}
				sx={{ color, letterSpacing: '0.1rem' }}>
				{pageSubheader}
			</PageSubheader>
		</PageTitleContainer>
	);
}
