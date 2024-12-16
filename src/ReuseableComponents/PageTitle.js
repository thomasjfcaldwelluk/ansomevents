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
		<PageTitleContainer>
			<PageHeader variant='h1' component={'h1'} sx={{ color }}>
				{pageHeader}
			</PageHeader>
			<PageSubheader variant='h2' component={'h2'} sx={{ color }}>
				{pageSubheader}
			</PageSubheader>
		</PageTitleContainer>
	);
}
