import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function SectionHeader({ sectionHeader }) {
	return (
		<Stack textAlign={'center'}>
			<Typography variant='h2' component={'h2'}>
				{sectionHeader}
			</Typography>
		</Stack>
	);
}
