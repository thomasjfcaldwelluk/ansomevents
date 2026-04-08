import { Button, Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ServicesCta({ title, text, buttonText, buttonLink }) {
	return (
		<SectionWrapper id='services-call-to-action' variant='light'>
			<GridLayout>
				<Grid size={{ xs: 12 }} textAlign={'center'}>
					<SectionHeader sectionHeader={title} />
					<Button variant='secondary' href={buttonLink}>
						{buttonText}
					</Button>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
