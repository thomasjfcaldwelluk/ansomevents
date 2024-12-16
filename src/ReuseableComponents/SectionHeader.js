import React from 'react';
import {
	SectionHeaderContainer,
	SectionHeaderText,
	SectionSubHeader,
} from './ReuseableComponentsStyles/SectionHeaderStyles';

export default function SectionHeader({
	sectionHeader,
	sectionSubheader,
	color = 'white',
}) {
	return (
		<SectionHeaderContainer>
			<SectionHeaderText variant='h2' component={'h2'} sx={{ color }} r>
				{sectionHeader}
			</SectionHeaderText>
			<SectionSubHeader variant='h3' component={'h3'} sx={{ color }}>
				{sectionSubheader}
			</SectionSubHeader>
		</SectionHeaderContainer>
	);
}
