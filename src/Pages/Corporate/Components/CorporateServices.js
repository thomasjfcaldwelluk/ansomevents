import { Card, CardContent, Grid, Stack } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardDescription from 'Components/ui/Card/CardDescription';
import CardTitle from 'Components/ui/Card/CardTitle';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateServices({ id, title, items }) {
	return (
		<SectionWrapper id={id} aria-label={title} variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((item) => (
					<Grid item key={item.id} size={{ xs: 6, md: 4 }}>
						<Card>
							<CardContent sx={{ paddingInline: 5, paddingBottom: 5 }}>
								<Stack
									direction='row'
									alignItems='center'
									justifyContent={'center'}
									spacing={1}
									mb={2}>
									<IconWrapper Icon={item.icon} size={24} />
									<CardTitle>{item.title}</CardTitle>
								</Stack>
								<CardDescription>{item.text}</CardDescription>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
