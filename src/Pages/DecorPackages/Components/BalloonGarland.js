import React from 'react';
import oneSide from './../../../Assets/Photos/Packages/oneSide.jpg';
import lShape from './../../../Assets/Photos/Packages/lShape.jpg';
import fullSize from './../../../Assets/Photos/Packages/fullSize.jpg';
import {
	BalloonGarlandContainer,
	BalloonGarlandTitle,
	BalloonGarlandOptionsContainer,
	BalloonOption,
	BalloonOptionTitle,
	BalloonOptionImage,
} from '../DecorPackagesStyles';
import Price from '../../../ReuseableComponents/Price';

export default function BalloonGarland() {
	const balloonImages = [
		{
			title: 'One Side',
			image: oneSide,
			alt: 'image of one side balloon garland available from Ansom Events',
			price: '60',
		},
		{
			title: 'L-Shape',
			image: lShape,
			alt: 'image of L-Shape balloon garland available from Ansom Events',
			price: '90',
		},
		{
			title: '18ft Garland',
			image: fullSize,
			alt: 'image of 18ft balloon garland available from Ansom Events',
			price: '135',
		},
	];
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
