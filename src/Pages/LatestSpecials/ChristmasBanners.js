import React, { useState } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import gold from '../../Assets/Photos/Specials/ChristmaSetUpGold.jpg';
import red from '../../Assets/Photos/Specials/ChristmaSetUpRed.jpg';
import Price from '../../ReuseableComponents/Price';

const ChristmasBanners = () => {
	const [currentImage, setCurrentImage] = useState(1); // State to track the current image

	const toggleImage = () => {
		setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1)); // Toggle between two images
	};

	return (
		<Box
			sx={{
				backgroundColor: '#f9f9f9',
				padding: '1rem',
				boxShadow: 3,
				borderRadius: '16px',
			}}>
			<Grid container spacing={2}>
				{/* Left Image with Toggle */}
				<Grid item size={{ xs: 12, md: 6 }}>
					<Box
						sx={{
							height: '100%',
							backgroundColor: '#486580',
							borderRadius: '8px',
							minHeight: '400px',
							backgroundImage: `url(${currentImage === 1 ? gold : red})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							position: 'relative',
						}}>
						<Button
							onClick={toggleImage}
							variant='contained'
							sx={{
								position: 'absolute',
								bottom: '16px',
								left: '16px',
								backgroundColor: '#ffffff',
								color: '#486580',
							}}>
							Change
						</Button>
					</Box>
				</Grid>

				{/* Right Content */}
				<Grid item size={{ xs: 12, md: 6 }} container direction='column'>
					{/* Title & Description */}
					<Grid item sx={{ padding: { xs: 2, lg: 5 } }}>
						<Stack
							sx={{
								width: '100%',
								alignItems: 'center',
							}}>
							<Typography
								sx={{
									fontSize: '0.6em',
									textTransform: 'uppercase',
									fontWeight: 600,
								}}>
								Christmas Special
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: '1.4em', md: '2.1' },
									fontWeight: 600,
									textAlign: 'center',
								}}>
								Christmas Pipe & Drape
							</Typography>
						</Stack>
						<Typography marginTop={6}>
							Make your Christmas party unforgettable with our festive special!
							Featuring a stunning stand and your choice of a gold or red
							backdrop adorned with a beautiful Christmas wreath, it’s the
							perfect photo opportunity for your holiday celebrations. Elevate
							the magic with optional balloon decorations for a truly memorable
							gathering.
						</Typography>
					</Grid>

					{/* Price */}
					<Price price='75' />
				</Grid>
			</Grid>
		</Box>
	);
};

export default ChristmasBanners;
