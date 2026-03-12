import { Button } from '@mui/material';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutCta({ id, title, primaryBtn, secondaryBtn }) {
	return (
		<SectionWrapper id={id} variant='dark'>
			<SectionHeader sectionHeader={title} />
			<Button variant='primary'>{primaryBtn.text}</Button>
			<Button variant='secondary'>{secondaryBtn.text}</Button>
		</SectionWrapper>
	);
}
