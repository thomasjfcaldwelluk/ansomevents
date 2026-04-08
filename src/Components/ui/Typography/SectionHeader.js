import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function SectionHeader({ sectionHeader, subHeader }) {
	return (
		<Stack textAlign={'center'} sx={{ mb: 2 }}>
			<Typography variant='sectionHeader' component={'h2'}>
				{sectionHeader}
			</Typography>
			<Typography variant='h5' component={'h3'}>
				{subHeader}
			</Typography>
		</Stack>
	);
}
