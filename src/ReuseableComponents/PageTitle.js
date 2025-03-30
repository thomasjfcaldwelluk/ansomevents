import React from 'react';
import {
	PageTitleContainer,
	PageHeader,
	PageSubheader,
} from './ReuseableComponentsStyles/PageTitleStyles';
import theme from './../theme';

export default function PageTitle({
	pageHeader,
	pageSubheader,
	color = theme.palette.primaryHeader.main,
}) {
	return (
		<PageTitleContainer spacing={1}>
			<PageHeader
				variant='h1'
				component={'h1'}
				sx={{
					color,
					fontSize: { xs: '28px', md: '40px', lg: '50px' },
					fontFamily: 'Playfair',
					textAlign: 'center',
				}}>
				{pageHeader}
			</PageHeader>
			<PageSubheader variant='h2' component={'h2'} sx={{ color }}>
				{pageSubheader}
			</PageSubheader>
		</PageTitleContainer>
	);
}
