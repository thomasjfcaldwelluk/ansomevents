import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ImageList, ImageListItem } from '@mui/material';
import theme from '../../../theme';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';
import { galleryImages } from './HomeData';
import { galleryImagesMore } from './HomeData';

const imageStyles = {
	imageStyle: {
		width: '100%',
		height: 'auto',
		objectFit: 'cover',
		borderRadius: '8px',
	},
};

export default function Gallery() {
	return (
		<Box
			padding={4}
			sx={{ backgroundColor: theme.palette.primaryBackground.secondary }}
			component='section'
			className='Ansom_Events_Gallery'>
			<SectionHeader
				sectionHeader='Gallery'
				sectionSubheader='Our Portfolio Of Dreams'
				color={theme.palette.primaryHeader.main}
			/>

			<Grid container spacing={2}>
				<Grid size={{ xs: 12, md: 6 }}>
					<ImageList
						cols={2} // 2 columns
						gap={8} // Spacing between images
						sx={{ width: '100%', height: 'auto' }}>
						{/* First Row: Image spanning 2 columns */}
						<ImageListItem cols={2}>
							<Box
								component='img'
								src={galleryImages[0].src}
								alt={galleryImages[0].alt}
								title={galleryImages[0].title}
								loading='lazy'
								sx={{ ...imageStyles.imageStyle }}
							/>
						</ImageListItem>
						{/* Second Row: Two images, each in one column */}
						{galleryImages.slice(1).map((item) => (
							<ImageListItem key={item.id} cols={1}>
								<Box
									component='img'
									src={item.src}
									alt={item.alt}
									title={item.title}
									loading='lazy'
									style={{ ...imageStyles.imageStyle }}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<ImageList
						cols={2} // 2 columns
						gap={8} // Spacing between images
						sx={{ width: '100%', height: 'auto' }}>
						{/* First Row: Image spanning 2 columns */}
						<ImageListItem cols={2}>
							<Box
								component='img'
								src={galleryImagesMore[0].src}
								alt={galleryImagesMore[0].title}
								title={galleryImagesMore[0].title}
								loading='lazy'
								style={{ ...imageStyles.imageStyle }}
							/>
						</ImageListItem>
						{/* Second Row: Two images, each in one column */}
						{galleryImagesMore.slice(1).map((item) => (
							<ImageListItem key={item.id} cols={1}>
								<Box
									component='img'
									src={item.src}
									alt={item.alt}
									title={item.title}
									loading='lazy'
									style={{ ...imageStyles.imageStyle }}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
			</Grid>
		</Box>
	);
}
