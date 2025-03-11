import React from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { fullPackageData } from '../PackageData';

const packageStyles = {
	introStyle: {
		width: '100%',
	},
};

export default function Packages() {
	return (
		<Box>
			<Box>
				<Typography sx={{ ...packageStyles.introStyle }}>
					We offer a décor package for every budget, with plenty of add-ons to
					customize your event. From elegant essentials to luxurious extras, we
					make every occasion special. Book now to secure your date and let us
					bring your vision to life with stunning decorations!
				</Typography>
				{fullPackageData.map((pkg, index) => (
					<Grid key={index} container marginBlock={1}>
						<Grid item size={{ xs: 12, md: 4 }}>
							<img src={pkg.image} alt={pkg.alt} width='100%' />
						</Grid>
						<Grid item size={{ xs: 12, md: 8 }}>
							<Typography>
								{pkg.title} - £{pkg.price}
							</Typography>
							<Typography>{pkg.description}</Typography>
							<List>
								{pkg.included.map((item, itemIndex) => (
									<ListItem key={itemIndex} sx={{ padding: 0 }}>
										<ListItemText padding={0}>{item}</ListItemText>
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
