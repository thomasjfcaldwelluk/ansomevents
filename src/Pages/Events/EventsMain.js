import { Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import PageTitle from '../../ReuseableComponents/PageTitle';
import theme from '../../theme';
import easterParty from './EventsAssets/easterParty.png';

export default function EventsMain() {
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.primaryBackground.main,
				padding: 2,
			}}>
			<PageTitle
				pageHeader='Upcoming Events'
				pageSubheader='With Ansom Events'
			/>
			<Grid container padding={6} justifyContent={'center'}>
				<Grid item size={{ xs: 12, md: 4 }}>
					<Box component={'img'} src={easterParty} sx={{ width: '100%' }} />
				</Grid>
			</Grid>
		</Box>
	);
}
