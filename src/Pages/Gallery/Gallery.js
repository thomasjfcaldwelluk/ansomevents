import React from 'react';
import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../Home/Components/HomeData';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

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
		<Box component='main' id='Ansom_Events_Gallery' aria-label='Main Gallery'>
			<Helmet>
				<title>
					Event Gallery: Weddings, Parties & Corporate Events in Cornwall &
					Devon
				</title>
				<meta
					name='description'
					content='View the Ansom Events gallery of stunningly styled weddings, corporate parties, and custom celebrations across Cornwall and Devon. Get inspired for your event!'
				/>
				<meta
					name='keywords'
					content='event gallery Cornwall, wedding decor Devon, party setups, corporate event inspiration, luxury styling portfolio'
				/>
				<link rel='canonical' href='https://ansomevents.com/gallery' />
				<meta
					property='og:title'
					content='Ansom Events Portfolio: See Our Stunning Weddings & Parties'
				/>
				<meta
					property='og:description'
					content='Browse our photo gallery and get inspired by hundreds of beautifully styled events and wedding setups across the South West.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/gallery-hero-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/gallery' />
			</Helmet>
			<PageTitle
				pageHeader={'Ansom Events Gallery'}
				pageSubheader={'Take A Look At Our Creations'}
				smallHeaderOnMobile
			/>
			<LayoutWrapper>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<ImageList
						sx={
							{
								// maxWidth: '1000px',
								// minWidth: '250px',
								// maxHeight: 1550,
								// minHeight: 450,
							}
						}
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
			</LayoutWrapper>
		</Box>
	);
}
