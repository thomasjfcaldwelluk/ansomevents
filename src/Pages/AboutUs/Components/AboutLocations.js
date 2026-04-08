import { Grid } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import Map from 'Components/Sections/Map/Map';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutLocations({ id, title, intro, text }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout>
				<Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
					<p>{text}</p>
				</Grid>
				<Grid size={{ xs: 12 }} sx={{ textAlign: 'center', height: '400px' }}>
					<Map />
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
