import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
} from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';

export default function WeddingPackages({ title, items }) {
	return (
		<SectionWrapper id='wedding-packages' variant='dark'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((pkg) => (
					<Grid key={pkg.id} size={{ xs: 12, md: 4 }}>
						<Card variant='primary'>
							<CardContent sx={{ flexGrow: 1 }}>
								<CardTitle>{pkg.name}</CardTitle>
								<Typography variant='h4' component={'h4'}>
									{pkg.price.display}
								</Typography>
								<List>
									{pkg.includes.map((item, index) => (
										<ListItem
											key={index}
											sx={{
												display: 'list-item',
												listStyleType: item.bullet === false ? 'none' : 'disc',
												pl: item.bullet === false ? 3 : 2,
												fontWeight: item.bold ? 700 : 400,
											}}>
											{item.text}
										</ListItem>
									))}
								</List>
							</CardContent>
						</Card>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
