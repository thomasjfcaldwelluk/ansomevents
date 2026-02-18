import { Box, Card, Grid, Icon, Typography } from '@mui/material';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';

export default function HelpWith({ title, items }) {
	return (
		<Box>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item, index) => (
					<Grid item size={{ xs: 12, md: 3 }}>
						<Card key={item.id}>
							<Typography>{item.text}</Typography>
							<Icon>{item.icon}</Icon>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</Box>
	);
}
