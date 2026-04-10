import React from 'react';
import { Grid } from '@mui/material';
import DecorItemCard from './DecorItemCard';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function DecorSection({
	id,
	title,
	intro,
	items,
	grid,
	variant,
	imageVariant = 'standard',
}) {
	return (
		<SectionWrapper id={id} variant={variant}>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout sx={{ marginTop: 4 }}>
				{items.map((item) => (
					<Grid key={item.id} {...grid}>
						<DecorItemCard {...item} imageVariant={imageVariant} />
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
