import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import { balloonDisplayData } from './PackageData';
import Grid from '@mui/material/Grid2';
export default function BalloonDisplays() {
	return (
		<Box>
			<Grid container spacing={4}>
				{balloonDisplayData.map((x, index) => (
					<Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<Grid container sx={{ display: 'flex' }}>
							<Grid>
								<Box component={'img'} src={x.image} sx={{ width: '100px' }} />
							</Grid>
							<Grid>
								<Typography fontSize={12}>{x.title}</Typography>
								<Typography fontSize={3}>{x.description}</Typography>
								<Typography fontSize={16}>{x.price}</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
