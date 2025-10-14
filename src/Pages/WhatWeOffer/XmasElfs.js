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

const elfItems = [
	{
		id: 1,
		title: 'Balloon Gift Design',
		price: 10,
		img: xmasBalloon1,
	},
	{
		id: 2,
		title: 'Balloon Star Stack',
		price: 15,
		img: xmasBalloon2,
	},
	{
		id: 3,
		title: 'Centerpiece Balloon',
		price: 20,
		img: xmasBalloon3,
	},
	{
		id: 4,
		title: 'Elf Mailbox',
		price: 15,
		img: xmasBalloon4,
	},
];

export default function XmasElfs() {
	return (
		<Box>
			<Typography
				variant='h4'
				component={'h5'}
				gutterBottom
				sx={{ textAlign: 'center' }}>
				Elfs
			</Typography>
			<Grid container spacing={4} sx={{ mt: 2 }}>
				{elfItems.map((item) => (
					<Grid item size={{ xs: 12, md: 4, lg: 3 }} key={item.id}>
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
								<Typography variant='body2' color='text.secondary'>
									{item.description}
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
