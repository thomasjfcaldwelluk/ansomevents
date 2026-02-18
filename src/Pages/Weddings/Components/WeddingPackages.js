import React from 'react';
import {
	Box,
	Grid,
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
} from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionHeader from 'Components/ui/Typography/SectionHeader';

export default function WeddingPackages({ title, items }) {
	return (
		<>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{items.map((pkg) => (
					<Grid key={pkg.id} size={{ xs: 12, md: 4 }}>
						<Card sx={{ height: '100%' }}>
							<CardContent>
								{/* Name */}
								<Typography variant='h3' component={'h3'}>
									{pkg.name}
								</Typography>

								{/* Price */}
								<Typography>{pkg.price.display}</Typography>

								{/* Includes */}
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
		</>
	);
}
