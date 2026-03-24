import { Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutStory({ id, title, paragraph }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<SectionHeader sectionHeader={title} />
			<CenterBox padding={1}>
				<Typography>{paragraph}</Typography>
			</CenterBox>
		</SectionWrapper>
	);
}
