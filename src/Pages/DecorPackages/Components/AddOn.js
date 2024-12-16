import React from 'react';
import lightUpNumbers from './../../../Assets/Photos/Packages/numbersAddon.jpg';
import happyBirthday from './../../../Assets/Photos/Packages/happybirthdayAddOn.jpg';
import ohBabyBanner from './../../../Assets/Photos/Packages/OhBabyBannerAddOn.jpg';
import ohBabyAddon from './../../../Assets/Photos/Packages/ohBabyAddon.jpg';
import chairAdd from './../../../Assets/Photos/Packages/chairAddOn.jpg';
import pedestalAdd from './../../../Assets/Photos/Packages/pedestalStandAddOn.jpg';
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';
import Price from '../../../ReuseableComponents/Price';

export default function AddOn() {
	const addOnImages = [
		{
			id: 1,
			title: '4ft Light Up Letter & Numbers',
			image: lightUpNumbers,
			alt: 'Image of light up letters & Numbers available from Ansom Events',
			price: '25 Each Or £75 For Love Four Letters',
		},
		{
			id: 2,
			title: 'Happy Birthday Sign',
			image: happyBirthday,
			alt: 'Image of Happy Birthday Sign available from Ansom Events',
			price: '5',
		},
		{
			id: 3,
			title: 'Baby Shower Banner',
			image: ohBabyBanner,
			alt: 'Image of Baby Shower Banner available from Ansom Events',
			price: '5',
		},
		{
			id: 4,
			title: 'Baby Shower Sign',
			image: ohBabyAddon,
			alt: 'Image of Baby Shower Sign available from Ansom Events',
			price: '5',
		},
		{
			id: 5,
			title: 'Peacock Chair',
			image: chairAdd,
			alt: 'Image of Peacock Chair available from Ansom Events',
			price: '50',
		},
		{
			id: 6,
			title: 'Decor Pedestal',
			image: pedestalAdd,
			alt: 'Image of Decor Pedestal available from Ansom Events',
			price: '75',
		},
	];
	return (
		<Grid
			container
			spacing={4}
			sx={{
				backgroundColor: '#F7DD7D',
				padding: 5,
				borderRadius: '8px',
				boxShadow: 1,
			}}>
			<Grid item size={12}>
				<Typography
					sx={{
						fontSize: '1.5rem',
						fontWeight: 700,
						textAlign: 'center',
					}}>
					Popular Props To Add
				</Typography>
			</Grid>
			{addOnImages.map((data, index) => (
				<Grid item key={index} size={{ xs: 6, md: 4, lg: 2 }}>
					<Box
						loading='lazy'
						component='img'
						src={data.image}
						alt={data.alt}
						title={data.title}
						sx={{
							width: '100%',
							height: 'auto',
							borderRadius: '5px',
							boxShadow: 1,
						}}
					/>
					<Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
						{data.title}
					</Typography>
					<Price price={data.price} />
				</Grid>
			))}
		</Grid>
	);
}
