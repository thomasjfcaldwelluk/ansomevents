import React from 'react';
import {
	PriceSectionContainer,
	PriceContainer,
	PriceText,
	PriceAmountContainer,
	PriceAmount,
} from './ReuseableComponentsStyles/PriceStyles';

export default function Price({ price, padding = '0.3rem 0.9rem' }) {
	return (
		<PriceSectionContainer>
			<PriceContainer container spacing={2}>
				<PriceText>Price</PriceText>
				<PriceAmountContainer container sx={{ padding }}>
					<PriceAmount>£{price}*</PriceAmount>
				</PriceAmountContainer>
			</PriceContainer>
		</PriceSectionContainer>
	);
}
