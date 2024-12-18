import React from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import xmasTree from '../../Assets/Photos/Specials/christmasTreeBalloons.jpg';
import santaBalloon from '../../Assets/Photos/Specials/santaBalloon.jpg';
import Price from '../../ReuseableComponents/Price';

const christmasCardStyles = {
	cardContainer: {
		display: 'flex',
		flexDirection: { xs: 'column-reverse', md: 'row' },
		boxShadow: 3,
		borderRadius: '16px',
		height: '100%',
		padding: '0.75rem',
	},
	cardImage: {
		width: { xs: '100%', md: '40%' },
		aspectRatio: '2 / 3',
		borderRadius: '12px',
		objectFit: 'cover',
		marginRight: { md: '1.5rem' },
	},
	cardContent: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		textAlign: { xs: 'center', md: 'left' },
		padding: '0',
	},
	cardStack: { width: '100%', alignItems: 'center', marginBlock: '1em' },
	cardTitle: { fontSize: '0.6em', textTransform: 'uppercase', fontWeight: 600 },
	cardProductTitle: {
		fontSize: { xs: '1.4em', md: '2.1' },
		fontWeight: 600,
		textAlign: 'center',
	},
	cardDescription: {
		marginBottom: '2em',
		fontSize: '0.8rem',
		paddingInline: { xs: '0.5rem', md: '0' },
	},
	cardDeliveryInfo: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		padding: '0',
	},
};

const ChristmasCard = () => {
	const products = [
		{
			image: xmasTree, // Replace with your image URL
			title: 'Balloon Christmas Tree',
			description:
				'Add a touch of festive magic with our stunning Christmas tree made entirely of balloons! Perfect for homes or offices, this unique centerpiece combines creativity and holiday cheer. Customizable in your favorite colors, it’s a fun, eye-catching decoration that’s sure to impress guests and spread Christmas joy',
			price: '45.00',
		},
		{
			image: santaBalloon, // Replace with your image URL
			title: 'Balloon Father Christmas',
			description:
				'Delight your loved ones with our incredible balloon Father Christmas! Perfect as a festive decoration or a unique gift, it brings joy and holiday spirit to any home or office. Custom-made with vibrant balloons, this eye-catching creation is sure to impress and spread Christmas cheer all season long',
			price: '15.00',
		},
	];

	return (
		<Grid container spacing={4} marginBottom={4}>
			{products.map((product, index) => (
				<Grid item size={{ xs: 12, md: 6 }} key={index}>
					<Card sx={{ ...christmasCardStyles.cardContainer }}>
						<Box
							component='img'
							src={product.image}
							alt={product.title}
							title={product.title}
							sx={{ ...christmasCardStyles.cardImage }}
						/>
						<CardContent sx={{ ...christmasCardStyles.cardContent }}>
							<Stack sx={{ ...christmasCardStyles.cardStack }}>
								<Typography sx={{ ...christmasCardStyles.cardTitle }}>
									Christmas Special
								</Typography>
								<Typography sx={{ ...christmasCardStyles.cardProductTitle }}>
									{product.title}
								</Typography>
							</Stack>
							<Typography sx={{ ...christmasCardStyles.cardDescription }}>
								{product.description}
							</Typography>
							<Price price={product.price} />
							<Box sx={{ ...christmasCardStyles.cardDeliveryInfo }}>
								<Typography>* Not including delivery</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default ChristmasCard;
