import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

export default function GalleryPreview() {
	return (
		<Box>
			<Grid container>
				<Grid size={4}>
					<Box>Image1</Box>
				</Grid>
				<Grid size={4}>
					<Box>Image2</Box>
				</Grid>
				<Grid size={4}>
					<Box>Image3</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
