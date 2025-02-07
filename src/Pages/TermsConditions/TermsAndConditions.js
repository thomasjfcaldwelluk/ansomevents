import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { termsData, balloonTip } from './TermsConditionsData';

export default function TermsAndConditions() {
	return (
		<Box>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Typography variant='h3' component={'h3'}>
					Terms And Conditions
				</Typography>
			</Box>
			<Grid container sx={{ display: 'flex', padding: 3 }} spacing={2}>
				<Grid
					item
					size={{ xs: 12, md: 6 }}
					sx={{
						backgroundColor: 'lightcoral',
						padding: 2,
						borderRadius: '4px',
					}}>
					<Box>
						{termsData.map((data, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.5rem' }}>
								<Typography
									sx={{
										margin: '0 1rem',
									}}
									variant='p'
									component={'p'}>
									{data.id}:
								</Typography>
								<Typography
									variant='p'
									component={'p'}
									sx={{ textAlign: 'left' }}>
									{data.term}
								</Typography>
							</Box>
						))}
					</Box>
				</Grid>
				<Grid
					item
					size={{ xs: 12, md: 6 }}
					sx={{
						backgroundColor: 'lightblue',
						padding: 2,
						borderRadius: '4px',
					}}>
					<Box>
						{balloonTip.map((tips, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.5rem' }}>
								<Typography sx={{ margin: '0 1rem' }}>{tips.id}:</Typography>
								<Typography>{tips.tip}</Typography>
							</Box>
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
