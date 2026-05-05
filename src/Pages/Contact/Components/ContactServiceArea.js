import { Box, Grid, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import Map from 'Components/Sections/Map/Map';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactServiceArea({ id, title, paragraph, image }) {
	return (
		<SectionWrapper
			id={id}
			aria-label='Contact Service Area Section'
			variant='dark'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				<Grid size={{ xs: 12, md: 5 }}>
					<CenterBox alignItems='flex-start' padding={0}>
						<Typography variant='body1' component='p' color='#FFFFFF'>
							{paragraph}
						</Typography>
					</CenterBox>
					<CenterBox>
						<Box
							component={'img'}
							src={image}
							alt='Service Area'
							width={'100%'}
							borderRadius={2}
							sx={{ objectFit: 'cover' }}
						/>
					</CenterBox>
				</Grid>
				<Grid size={{ xs: 12, md: 7 }}>
					<Map />
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
