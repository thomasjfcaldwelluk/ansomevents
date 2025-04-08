import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';

export default function PackagesPreview() {
	return (
		<Grid item>
			<Box
				sx={{
					height: '100%',
					minHeight: 600,
					backgroundImage: 'url(https://placehold.co/600x600)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'flex',
					alignItems: 'flex-end',
				}}>
				<Box
					className='THISONE'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'flex-end',
						backgroundColor: 'blue',
						height: '100%',
					}}>
					<Typography>Packages For All Budgets</Typography>
					<Typography>Ready made packages for all types of Events</Typography>
					<Button>See All Packages</Button>
				</Box>
			</Box>
		</Grid>
	);
}
