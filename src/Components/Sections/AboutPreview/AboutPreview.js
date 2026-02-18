import { Box } from '@mui/material';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutPreview({ title, subtitle, description, cta }) {
	return (
		<Box>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<p>{description}</p>
			<a href={cta.link}>{cta.label}</a>
		</Box>
	);
}
