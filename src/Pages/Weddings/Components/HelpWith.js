import { Box, Card, CardContent, Grid, Icon, Typography } from '@mui/material';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';

export default function HelpWith({ title, items }) {
	return (
		<SectionWrapper id='weddings-help' variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item, index) => (
					<Grid item size={{ xs: 12, md: 3 }}>
						<Card key={item.id}>
							<CardContent sx={{ flexGrow: 1 }}>
								<CardTitle>{item.text}</CardTitle>
							</CardContent>
							<IconWrapper Icon={item.icon} colorVariant='gold' />
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
