import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import one from '../../../Assets/Photos/Gallery/Image1.jpg';
import two from '../../../Assets/Photos/Gallery/Image2.jpg';
import three from '../../../Assets/Photos/Gallery/Image3.jpg';
import four from '../../../Assets/Photos/Gallery/Image4.jpg';
import five from '../../../Assets/Photos/Gallery/image5.jpg';
import six from '../../../Assets/Photos/Gallery/Image6.jpg';
import { ImageList, ImageListItem } from '@mui/material';
import theme from '../../../theme';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';

const images = [
	{
		id: 1,
		src: one,
		alt: 'Pink, White and Gold ballon garland set up by Ansom Events',
		title: 'Pink, White and Gold ballon garland set up by Ansom Events',
	},
	{
		id: 2,
		src: two,
		alt: '5 year old child Birthday ballon set up by Ansom Events',
		title: '5 year old child Birthday ballon set up by Ansom Events',
	},
	{
		id: 3,
		src: three,
		alt: 'Blue, Pink and Grey Ballon Garland set up by Ansom Events',
		title: 'Blue, Pink and Grey Ballon Garland set up by Ansom Events',
	},
];
const imagesMore = [
	{
		id: 4,
		src: four,
		alt: 'Pink, White and Gold ballon garland set up by Ansom Events',
		title: 'Pink, White and Gold ballon garland set up by Ansom Events',
	},
	{
		id: 5,
		src: five,
		alt: '5 year old child Birthday ballon set up by Ansom Events',
		title: '5 year old child Birthday ballon set up by Ansom Events',
	},
	{
		id: 6,
		src: six,
		alt: 'Blue, Pink and Grey Ballon Garland set up by Ansom Events',
		title: 'Blue, Pink and Grey Ballon Garland set up by Ansom Events',
	},
];

export default function Gallery() {
	return (
		<Box padding={4} sx={{ backgroundColor: theme.palette.primaryBlue.main }}>
			<SectionHeader
				sectionHeader='Gallery'
				sectionSubheader='Our Portfolio Of Dreams'
				color={theme.palette.whiteText.main}
			/>

			<Grid container spacing={2}>
				<Grid size={{ xs: 12, md: 6 }}>
					<ImageList
						cols={2} // 2 columns
						gap={8} // Spacing between images
						sx={{ width: '100%', height: 'auto' }}>
						{/* First Row: Image spanning 2 columns */}
						<ImageListItem cols={2}>
							<img
								src={images[0].src}
								alt={images[0].alt}
								title={images[0].title}
								loading='lazy'
								style={{
									width: '100%',
									height: 'auto',
									objectFit: 'cover',
									borderRadius: '8px',
								}}
							/>
						</ImageListItem>
						{/* Second Row: Two images, each in one column */}
						{images.slice(1).map((item) => (
							<ImageListItem key={item.id} cols={1}>
								<img
									src={item.src}
									alt={item.alt}
									title={item.title}
									loading='lazy'
									style={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '8px',
									}}
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
							<img
								src={imagesMore[0].src}
								alt={imagesMore[0].title}
								title={imagesMore[0].title}
								loading='lazy'
								style={{
									width: '100%',
									height: 'auto',
									objectFit: 'cover',
									borderRadius: '8px',
								}}
							/>
						</ImageListItem>
						{/* Second Row: Two images, each in one column */}
						{imagesMore.slice(1).map((item) => (
							<ImageListItem key={item.id} cols={1}>
								<img
									src={item.src}
									alt={item.alt}
									title={item.title}
									loading='lazy'
									style={{
										width: '100%',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '8px',
									}}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
			</Grid>
		</Box>
	);
}
