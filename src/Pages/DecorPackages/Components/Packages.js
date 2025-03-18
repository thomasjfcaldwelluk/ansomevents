import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { fullPackageData } from '../PackageData';
import theme from '../../../theme';
const packageStyles = {
	introStyle: {
		width: '90%',
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
	return (
		<Box>
			<Box padding={2}>
				<Typography
					sx={{ ...packageStyles.introStyle }}
					variant='introText'
					component={'p'}>
					We offer a décor package for every budget, with plenty of add-ons to
					customize your event. From elegant essentials to luxurious extras, we
					make every occasion special. Book now to secure your date and let us
					bring your vision to life with stunning decorations!
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
									component={'h4'}
									variant='h4'
									sx={{ ...packageStyles.titleStyle }}>
									{pkg.title}
								</Typography>
								<Typography
									component={'h5'}
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
									<ListItem key={itemIndex} sx={{ ...packageStyles.listStyle }}>
										<Typography
											padding={0}
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
	);
}
