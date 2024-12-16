import React from 'react';
import { Box, Typography } from '@mui/material';

function AllServices() {
	return (
		<div>
			{' '}
			{/* Section 1 */}
			<Box
				sx={{
					height: '100vh',
					backgroundColor: 'lightcoral',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography variant='h2' color='white'>
					Section 1
				</Typography>
			</Box>
			{/* Section 2 */}
			<Box
				sx={{
					height: '100vh',
					backgroundColor: 'lightseagreen',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography variant='h2' color='white'>
					Section 2
				</Typography>
			</Box>
			{/* Section 3 */}
			<Box
				sx={{
					height: '100vh',
					backgroundColor: 'lightblue',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography variant='h2' color='white'>
					Section 3
				</Typography>
			</Box>
		</div>
	);
}

export default AllServices;
