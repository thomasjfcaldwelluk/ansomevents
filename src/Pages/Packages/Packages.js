import React from 'react';
import { Box, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import { List, ListItem, Typography } from '@mui/material';
import { fullPackageData } from './PackageData';
import theme from '../../theme';

import { Helmet } from 'react-helmet-async';
const packageStyles = {
	introStyle: {
		width: '100%',
		margin: '0 auto',
	},
	packageContainerStyle: {
		padding: 2,
		backgroundColor: theme.palette.primaryBackground.secondary,
		borderRadius: 3,
		marginBlock: 4,
	},
	imageContainerStyle: {},
	imageStyle: {
		width: '100%',
		borderRadius: 1,
		height: '100%',
	},
	titleStyle: {
		marginInline: 1,
	},
	priceStyle: {},
	descriptionStyle: {
		marginBlock: 2,
	},
	listStyle: { padding: 0 },
	listItemStyle: { padding: 0 },
};

export default function Packages() {
	const theme = useTheme();
	return (
		<Box component='main' className='Ansom_Events_Decor_Packages'>
			<Helmet>
				<title>Ansom Events - Event Packages for Every Budget</title>
				<meta
					name='description'
					content='Discover our event packages, from luxury setups to budget-friendly options. We provide tailored event décor in Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event packages, event decor, Cornwall, Devon, weddings, parties'
				/>
				<meta
					property='og:title'
					content='Ansom Events - Event Packages for Every Budget'
				/>
				<meta
					property='og:description'
					content='Explore our customizable event packages, perfect for weddings, parties, and corporate events.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/packages' />
				<link rel='canonical' href='https://ansomevents.com/packages' />
			</Helmet>
			<Grid
				component={'section'}
				container
				spacing={4}
				sx={{
					backgroundColor: theme.palette.primaryBackground.main,
					padding: 3,
				}}>
				<PageTitle
					pageHeader='Decor Packages For Hire At Ansom Events'
					pageSubheader='Impress Your Guests'
				/>
				<Box>
					<Box padding={2}>
						<Typography
							sx={{ ...packageStyles.introStyle }}
							variant='introText'
							component={'p'}>
							We offer a décor package for every budget, with plenty of add-ons
							to customize your event. From elegant essentials to luxurious
							extras, we make every occasion special. Book now to secure your
							date and let us bring your vision to life with stunning
							decorations!
						</Typography>
						{fullPackageData.map((pkg, index) => (
							<Grid
								key={index}
								container
								spacing={5}
								sx={{ ...packageStyles.packageContainerStyle }}>
								<Grid
									item
									size={{ xs: 12, md: 4 }}
									sx={{ ...packageStyles.imageContainerStyle }}>
									<Box
										component='img'
										src={pkg.image}
										alt={pkg.alt}
										sx={{ ...packageStyles.imageStyle }}
									/>
								</Grid>
								<Grid item size={{ xs: 12, md: 8 }}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										<Typography
											component={'h3'}
											variant='h4'
											sx={{ ...packageStyles.titleStyle }}>
											{pkg.title}
										</Typography>
										<Typography
											component={'h4'}
											variant='h5'
											sx={{ ...packageStyles.priceStyle }}>
											£{pkg.price}
										</Typography>
									</Box>
									<Typography
										component={'p'}
										variant='descriptionText'
										sx={{ ...packageStyles.descriptionStyle }}>
										{pkg.description}
									</Typography>
									<List sx={{ padding: 0 }}>
										{pkg.included.map((item, itemIndex) => (
											<ListItem
												key={itemIndex}
												sx={{ ...packageStyles.listStyle }}>
												<Typography
													variant='listText'
													component='p'
													sx={{ ...packageStyles.listItemStyle }}>
													{item}
												</Typography>
											</ListItem>
										))}
									</List>
								</Grid>
							</Grid>
						))}
					</Box>
				</Box>
			</Grid>
		</Box>
	);
}
