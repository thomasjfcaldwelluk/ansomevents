import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { termsData, balloonTip } from './TermsConditionsData';
import theme from '../../theme';

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
						backgroundColor: theme.palette.primaryBlue.main,
						padding: 2,
						borderRadius: '4px',
					}}>
					<Box>
						{termsData.map((data, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.25rem' }}>
								<Typography
									sx={{
										margin: '0 1rem',
										color: theme.palette.background.default,
									}}
									variant='p'
									component={'p'}>
									{data.id}:
								</Typography>
								<Typography
									variant='p'
									component={'p'}
									sx={{
										textAlign: 'left',
										color: theme.palette.background.default,
									}}>
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
						border: '2px solid #7096CE',
						padding: 2,
						borderRadius: '4px',
						backgroundColor: 'white',
					}}>
					<Box>
						{balloonTip.map((tips, index) => (
							<Box key={index} sx={{ display: 'flex', padding: '0.25rem' }}>
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
