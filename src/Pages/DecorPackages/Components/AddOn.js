import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';
import { addOnImages } from '../PackageData';
import Price from '../../../ReuseableComponents/Price';

const addOnStyles = {
	addOnContainer: {
		backgroundColor: '#F7DD7D',
		padding: 5,
		borderRadius: '8px',
		boxShadow: 1,
	},
	addOnHeader: {
		fontSize: '1.5rem',
		fontWeight: 700,
		textAlign: 'center',
	},
	addOnImage: {
		width: '100%',
		height: 'auto',
		borderRadius: '5px',
		boxShadow: 1,
	},
	addOnTitle: {
		fontWeight: 600,
		textAlign: 'center',
	},
};

export default function AddOn() {
	return (
		<Grid container spacing={4} sx={{ ...addOnStyles.addOnContainer }}>
			<Grid item size={12}>
				<Typography sx={{ ...addOnStyles.addOnHeader }}>
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
						sx={{ ...addOnStyles.addOnImage }}
					/>
					<Typography sx={{ ...addOnStyles.addOnTitle }}>
						{data.title}
					</Typography>
					<Price price={data.price} />
				</Grid>
			))}
		</Grid>
	);
}
