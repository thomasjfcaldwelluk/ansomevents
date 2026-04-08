import { Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutStory({ id, title, intro, paragraph }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<CenterBox padding={{ xs: 2, lg: 0 }} maxWidth='1000px' mx='auto'>
				<Typography variant='smallBody'>{paragraph}</Typography>
			</CenterBox>
		</SectionWrapper>
	);
}
