import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import { Button, Typography, Box } from '@mui/material';

export default function AboutPreview({ title, description, cta }) {
	return (
		<SectionWrapper id='about-us-preview' variant='light'>
			<SectionHeader sectionHeader={title} />
			<Typography variant='body1' component={'p'}>
				{description}
			</Typography>
			<Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
				<Button variant='secondary' href={cta.link}>
					{cta.label}
				</Button>
			</Box>
		</SectionWrapper>
	);
}
