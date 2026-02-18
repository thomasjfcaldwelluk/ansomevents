import { Button } from '@mui/material';
import React from 'react';

export default function CorporateCTA({ title, subtitle, button }) {
	return (
		<section aria-label={title}>
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<Button variant='primary' href={button.link}>
				{button.label}
			</Button>
		</section>
	);
}
