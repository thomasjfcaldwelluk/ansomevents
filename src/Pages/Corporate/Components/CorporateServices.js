import { Card, CardContent, Grid, Stack } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardDescription from 'Components/ui/Card/CardDescription';
import CardTitle from 'Components/ui/Card/CardTitle';
import SectionDivider from 'Components/ui/Divider/SectionDivider';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CorporateServices({ id, title, intro, items }) {
	return (
		<SectionWrapper id={id} aria-label={title} variant='light'>
			<SectionHeader sectionHeader={title} subHeader={intro} />
			<GridLayout>
				{items.map((item) => (
					<Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
						<Card variant='primary'>
							<CardContent>
								<Stack
									direction='row'
									alignItems='center'
									justifyContent={'center'}
									spacing={2}
									marginBlock={2}>
									<IconWrapper
										Icon={item.icon}
										size={36}
										colorVariant={'muted'}
									/>
									<CardTitle>{item.title}</CardTitle>
								</Stack>
								<SectionDivider variant='gold' />
								<CardDescription sx={{ padding: 1 }}>
									{item.text}
								</CardDescription>
								<SectionDivider variant='gold' />
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
