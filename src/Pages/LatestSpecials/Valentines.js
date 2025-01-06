import { Box, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Valentines() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: '0 auto',
				padding: '100px',
			}}>
			<Box>
				<FavoriteIcon sx={{ color: 'red', fontSize: '100px' }} />
			</Box>
			<Box>
				<Typography sx={{ fontSize: '60px', textAlign: 'center' }}>
					Valentines Day Specials Coming Soon
				</Typography>
			</Box>
			<Box>
				<FavoriteIcon sx={{ color: 'red', fontSize: '100px' }} />
			</Box>
		</Box>
	);
}
