import { Box } from '@mui/material';
import React from 'react';

export default function CorporateHero({
	title,
	subtitle,
	primaryCta,
	secondaryCta,
	image,
}) {
	return (
		<Box>
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<a href={primaryCta.link}>{primaryCta.label}</a>
			<a href={secondaryCta.link}>{secondaryCta.label}</a>
			<img src={image} alt='Corporate event example' />
		</Box>
	);
}
