import { Button } from '@mui/material';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';

export default function CorporateCTA({ id, title, subtitle, button }) {
	return (
		<SectionWrapper id={id} aria-label={title} variant='dark'>
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<Button variant='primary' href={button.link}>
				{button.label}
			</Button>
		</SectionWrapper>
	);
}
