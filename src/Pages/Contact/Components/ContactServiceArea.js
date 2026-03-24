import { Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import Map from 'Components/Sections/Map/Map';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactServiceArea({ id, title, paragraph, areas }) {
	return (
		<SectionWrapper id={id} aria-label='Contact Service Area Section'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				<Grid item size={{ xs: 12, md: 4 }}>
					<CenterBox alignItems='flex-start'>
						<Typography variant='body1' component='p' gutterBottom>
							{paragraph}
						</Typography>
					</CenterBox>
					<CenterBox flexDirection='column' padding={6} alignItems='flex-start'>
						<Typography variant='h6' component='h3' gutterBottom>
							Areas We Cover:
						</Typography>
						<ul>
							{areas.map((area, index) => (
								<li key={index}>
									<Typography variant='body1'>{area}</Typography>
								</li>
							))}
						</ul>
					</CenterBox>
				</Grid>
				<Grid item size={{ xs: 12, md: 8 }}>
					<Map />
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
