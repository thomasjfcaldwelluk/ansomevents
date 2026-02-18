import { Box } from '@mui/material';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CTA({ title, subtitle, primaryCta }) {
	return (
		<Box>
			<SectionHeader sectionHeader={title} />
			<p>{subtitle}</p>
			<a href={primaryCta.link}>{primaryCta.label}</a>
		</Box>
	);
}
