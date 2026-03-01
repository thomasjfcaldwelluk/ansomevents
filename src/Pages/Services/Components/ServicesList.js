import React from 'react';
import ServicesCard from './ServicesCard';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import { Grid } from '@mui/material';

export default function ServicesList({ services }) {
	return (
		<SectionWrapper id='services-list' variant='dark'>
			<GridLayout>
				{services.map((service) => (
					<Grid item size={{ xs: 12, md: 6, lg: 3 }}>
						<ServicesCard key={service.id} {...service} />
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
