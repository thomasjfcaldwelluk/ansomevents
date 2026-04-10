import { Card, CardContent, Grid } from '@mui/material';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import SectionDivider from 'Components/ui/Divider/SectionDivider';

export default function HelpWith({ title, intro, items }) {
	return (
		<SectionWrapper id='weddings-help' variant='light'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout>
				{items.map((item, index) => (
					<Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
						<Card key={item.id} variant='primary' sx={{ paddingBottom: 2 }}>
							<CardContent sx={{ flexGrow: 1 }}>
								<CardTitle sx={{ fontSize: '0.9rem', textAlign: 'center' }}>
									{item.text}
								</CardTitle>
								<SectionDivider variant='gold' />
							</CardContent>
							<IconWrapper Icon={item.icon} colorVariant='gold' />
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
