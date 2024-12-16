import React from 'react';
import { Box } from '@mui/material';
import fullPackageData from '../PackageData';
import {
	PackageContainer,
	PackageCardContainer,
	ImageContainer,
	Image,
	ContentContainer,
	TitleContainer,
	Title,
	DetailsContainer,
	DescriptionContainer,
	Description,
	InformationContainer,
	IncludedContainer,
	IncludedTitleContainer,
	IncludedTitle,
	IncludedTextContainer,
	IncludedOne,
	IncludedTwo,
	PriceContainer,
} from '../DecorPackagesStyles';
import BalloonGarland from './BalloonGarland';
import Price from '../../../ReuseableComponents/Price';

export default function Packages() {
	return (
		<Box>
			{fullPackageData.slice(0, 2).map((data, index) => (
				<PackageContainer key={index}>
					<PackageCardContainer container spacing={2}>
						<ImageContainer item size={{ sm: 12, md: 7, lg: 6 }}>
							<Image
								src={data.image}
								alt={data.alt}
								loading='eager'
								title={data.title}
							/>
						</ImageContainer>
						<ContentContainer item container size={{ sm: 12, md: 5, lg: 6 }}>
							<TitleContainer item size={{ xs: 12 }}>
								<Title>{data.title}</Title>
							</TitleContainer>
							<DetailsContainer item container size={{ xs: 12 }}>
								<DescriptionContainer item size={{ xs: 12, md: 6 }}>
									<Description>{data.description}</Description>
								</DescriptionContainer>
								<InformationContainer item size={{ xs: 12, md: 6 }}>
									<IncludedContainer>
										<IncludedTitleContainer>
											<IncludedTitle>Included</IncludedTitle>
										</IncludedTitleContainer>
										<IncludedTextContainer>
											<IncludedOne>{data.include1}</IncludedOne>
											<IncludedTwo>{data.include2}</IncludedTwo>
										</IncludedTextContainer>
									</IncludedContainer>
									<PriceContainer>
										<Price price={data.price} />
									</PriceContainer>
								</InformationContainer>
								<BalloonGarland />
							</DetailsContainer>
						</ContentContainer>
					</PackageCardContainer>
				</PackageContainer>
			))}
		</Box>
	);
}
