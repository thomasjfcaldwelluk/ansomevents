import React from 'react';
import { Box } from '@mui/material';
import theme from '../../../theme';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from './HomeData';

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

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
			<Box sx={{ marginBlock: 5, display: 'flex', justifyContent: 'center' }}>
				<ImageList
					sx={{
						maxWidth: '1000px',
						minWidth: '250px',
						maxHeight: 1550,
						minHeight: 450,
					}}
					variant='quilted'
					cols={4}
					rowHeight='auto'>
					{itemData.map((item) => (
						<ImageListItem
							key={item.img}
							cols={item.cols || 1}
							rows={item.rows || 1}>
							<img
								{...srcset(item.img, 121, item.rows, item.cols)}
								alt={item.title}
								loading='lazy'
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Box>
	);
}
