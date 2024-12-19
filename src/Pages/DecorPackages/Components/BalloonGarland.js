import React from 'react';
import {
	BalloonGarlandContainer,
	BalloonGarlandTitle,
	BalloonGarlandOptionsContainer,
	BalloonOption,
	BalloonOptionTitle,
	BalloonOptionImage,
} from '../DecorPackagesStyles';
import Price from '../../../ReuseableComponents/Price';
import { balloonImages } from '../PackageData';

export default function BalloonGarland() {
	return (
		<BalloonGarlandContainer>
			<BalloonGarlandTitle variant='h3' component='h3'>
				Balloon Garland to add
			</BalloonGarlandTitle>
			<BalloonGarlandOptionsContainer>
				{balloonImages.map((pkg, index) => (
					<BalloonOption key={index} container spacing={1}>
						<BalloonOptionTitle>{pkg.title}</BalloonOptionTitle>
						<BalloonOptionImage
							src={pkg.image}
							loading='eager'
							alt={pkg.alt}
							title={pkg.title}
						/>
						<Price price={pkg.price} />
					</BalloonOption>
				))}
			</BalloonGarlandOptionsContainer>
		</BalloonGarlandContainer>
	);
}
