import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import { Button, Grid, Typography } from '@mui/material';

export default function CTA({ title, subtitle, primaryCta }) {
	return (
		<SectionWrapper id='call-to-action'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				<Grid
					size={{ xs: 12 }}
					container
					direction='column'
					alignItems='center'
					textAlign='center'
					gap={10}>
					<Typography variant='body1'>{subtitle}</Typography>
					<Button variant='primary' href={primaryCta.link}>
						{primaryCta.label}
					</Button>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
