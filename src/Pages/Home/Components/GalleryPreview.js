import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import galleryPreview1 from '../../../Assets/Photos/HomePageImages/galleryPreview1.webp';
import galleryPreview2 from '../../../Assets/Photos/HomePageImages/galleryPreview2.webp';
import galleryPreview3 from '../../../Assets/Photos/HomePageImages/galleryPreview3.webp';
import theme from '../../../theme';

const images = [galleryPreview1, galleryPreview2, galleryPreview3];

const galleryPreviewStyles = {
	imageStyles: {
		imageRatio: '3/2',
		width: { xs: '100%', md: '100%' },
		height: 'auto',
		maxHeight: '400px',
		objectFit: 'cover',
		boxShadow: 2,
		borderRadius: 2,
		transition: 'opacity 0.5s',
	},
};

export default function GalleryPreview() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 2500); // Change image every 2.5 seconds
		return () => clearInterval(timer);
	}, []);

	return (
		<Box
			sx={{
				p: 2,
				mb: 4,
			}}>
			<Grid container spacing={2} alignItems={'stretch'}>
				<Grid item size={{ xs: 12, md: 6 }}>
					<Box
						bgcolor={theme.palette.primaryBackground.secondary}
						p={3}
						borderRadius={2}
						height={'100%'}
						boxShadow={2}>
						<MuiLink
							component={Link}
							variant='h4'
							to='/gallery'
							underline='hover'
							display='block'
							color='theme.palette.primaryHeader.main'
							sx={{ textAlign: 'center' }}>
							Gallery Of Our Past Events
						</MuiLink>
						<Box p={3}>
							<Typography component={'p'} variant='p'>
								Explore our gallery to see the beautiful moments captured from
								our past events. From weddings to corporate gatherings, each
								image tells a story of joy and celebration. We pride ourselves
								on creating unforgettable experiences, and our gallery reflects
								the passion and detail we bring to every occasion. Whether
								you're looking for inspiration or reassurance, these snapshots
								highlight the magic we can help you create.
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<MuiLink
								component={Link}
								variant='titleText'
								to='/gallery'
								underline='hover'
								display='block'
								color='theme.palette.primaryHeader.main'>
								See More Of Our Past Events
							</MuiLink>
						</Box>
					</Box>
				</Grid>
				<Grid item size={{ xs: 12, md: 6 }}>
					<Box
						component='img'
						src={images[current]}
						alt='Gallery preview'
						sx={{ ...galleryPreviewStyles.imageStyles }}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
