import React from 'react';
import ansomLogo from '../../../../Assets/Logo/AnsomEventsLogoForWeb.svg';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Logo() {
	return (
		<Box component={RouterLink} to='/' sx={{ display: 'inline-flex' }}>
			<Box
				component='img'
				src={ansomLogo}
				alt='Ansom Events'
				sx={{ height: 48 }}
			/>
		</Box>
	);
}
