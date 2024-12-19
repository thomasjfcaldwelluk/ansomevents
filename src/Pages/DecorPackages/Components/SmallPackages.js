import React from 'react';
import Grid from '@mui/material/Grid2';
import { fullPackageData } from '../PackageData';
import { Card, CardMedia, CardContent, Box } from '@mui/material';
import Price from '../../../ReuseableComponents/Price';
import {
	Title,
	TitleContainer,
	DescriptionContainer,
	Description,
	IncludedTitleContainer,
	IncludedTitle,
	IncludedOne,
	IncludedTwo,
} from '../DecorPackagesStyles';
import theme from '../../../../src/theme';

const smallStyles = {
	container: { alignItems: 'stretch' },
	card: {
		margin: 'auto',
		padding: 2,
		height: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	cardImage: {
		width: '100%',
		height: 'auto',
		borderRadius: '5px',
	},
};

export default function SmallPackages() {
	return (
		<Grid container spacing={2} sx={{ ...smallStyles.container }}>
			{fullPackageData.slice(2, 5).map((data, index) => (
				<Grid key={index} size={{ xs: 12, md: 4 }} item container>
					<Card sx={{ ...smallStyles.card }}>
						<CardMedia
							component='img'
							image={data.image}
							alt={data.alt}
							title={data.title}
							loading='lazy'
							sx={{ ...smallStyles.cardImage }}
						/>
						<CardContent>
							<TitleContainer>
								<Title>{data.title}</Title>
							</TitleContainer>
							<Grid container>
								<DescriptionContainer item size={12}>
									<Description>{data.description}</Description>
								</DescriptionContainer>
								<Box item size={12}>
									<IncludedTitleContainer>
										<IncludedTitle sx={{ textAlign: 'center' }}>
											Included
										</IncludedTitle>
									</IncludedTitleContainer>
									<IncludedOne>{data.include1}</IncludedOne>
									<IncludedTwo>{data.include2}</IncludedTwo>
								</Box>
							</Grid>
							<Grid container sx={{ justifyContent: 'center' }}>
								<Price price={data.price} />
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
