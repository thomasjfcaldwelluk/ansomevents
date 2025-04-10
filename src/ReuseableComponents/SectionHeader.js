import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function SectionHeader({ sectionHeader, sectionSubheader }) {
	return (
		<Stack alignItems='center'>
			<Typography variant='h2' component={'h2'}>
				{sectionHeader}
			</Typography>
			<Typography variant='h3' component={'h3'}>
				{sectionSubheader}
			</Typography>
		</Stack>
	);
}
