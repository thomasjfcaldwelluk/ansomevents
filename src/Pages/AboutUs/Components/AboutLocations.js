import { Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutLocations({ id, title, text }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				<Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
					<p>{text}</p>
				</Grid>
				<Grid></Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
