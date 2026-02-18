import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import DecorItemCard from './DecorItemCard';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';

export default function DecorSection({ id, title, intro, items, grid }) {
	return (
		<Box>
			<SectionHeader sectionHeader={title} />

			{intro && (
				<Typography variant='body1' sx={{ mb: 4 }}>
					{intro}
				</Typography>
			)}
			<GridLayout>
				{items.map((item) => (
					<Grid item key={item.id} {...grid}>
						<DecorItemCard {...item} />
					</Grid>
				))}
			</GridLayout>
		</Box>
	);
}
