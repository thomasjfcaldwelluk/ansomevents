import { Box, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateTrust({ items }) {
	return (
		<SectionWrapper
			id='why-choose-us'
			variant='dark'
			aria-label='Why Choose Us'>
			<SectionHeader sectionHeader='reasons to work with us' />
			<GridLayout>
				{items.map((item) => (
					<Grid item key={item.id} size={{ xs: 3 }}>
						<Box>
							<Typography variant='h6' sx={{ textAlign: 'center' }}>
								{item.text}
							</Typography>
						</Box>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
