import {
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';
import React from 'react';
import xmasBalloon1 from '../../../src/Assets/Photos/ElfImages/xmasBalloon1.webp';
import xmasBalloon2 from '../../../src/Assets/Photos/ElfImages/xmasBalloon2.webp';
import xmasBalloon3 from '../../../src/Assets/Photos/ElfImages/xmasBalloon3.webp';
import xmasBalloon4 from '../../../src/Assets/Photos/ElfImages/xmasBalloon4.webp';
import xmasBalloon5 from '../../../src/Assets/Photos/ElfImages/xmasBalloon5.webp';
import xmasBalloon6 from '../../../src/Assets/Photos/ElfImages/xmasBalloon6.webp';

const elfItems = [
	{
		id: 1,
		title: 'Elf Balloon Garland 1',
		price: 'Price Coming Soon',
		img: xmasBalloon1,
	},
	{
		id: 2,
		title: 'Elf Balloon Garland 2',
		price: 'Price Coming Soon',
		img: xmasBalloon2,
	},
	{
		id: 3,
		title: 'Elf Balloon Garland 3',
		price: 'Price Coming Soon',
		img: xmasBalloon3,
	},
	{
		id: 4,
		title: 'Elf Balloon Garland 4',
		price: 'Price Coming Soon',
		img: xmasBalloon4,
	},
	{
		id: 5,
		title: 'Elf Balloon Garland 5',
		price: 'Price Coming Soon',
		img: xmasBalloon5,
	},
	{ id: 6, title: 'Elf Balloon Garland 6', price: '£175', img: xmasBalloon6 },
];

export default function XmasElfs() {
	return (
		<Box>
			<Grid container spacing={4} sx={{ mt: 2 }}>
				{elfItems.map((item) => (
					<Grid item size={{ xs: 12, md: 4, lg: 2 }} key={item.id}>
						<Card sx={{ borderRadius: '16px', boxShadow: 3 }}>
							<CardMedia
								component='img'
								height='auto'
								image={item.img}
								alt={item.title}
								sx={{ objectFit: 'fill' }}
							/>
							<CardContent sx={{ textAlign: 'center', background: '#f8f5f0' }}>
								<Typography variant='h6' component='div'>
									{item.title}
								</Typography>
								<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
									{item.price}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
