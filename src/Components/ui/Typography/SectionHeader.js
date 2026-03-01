import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function SectionHeader({ sectionHeader }) {
	return (
		<Stack textAlign={'center'}>
			<Typography variant='sectionHeader' component={'h2'}>
				{sectionHeader}
			</Typography>
		</Stack>
	);
}
