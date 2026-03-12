import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ContactInfo({ contactInfo }) {
	return (
		<Box
			id={contactInfo.id}
			aria-label='Contact Information Section'
			sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<Typography>{contactInfo.title}</Typography>
			<Typography>{contactInfo.email}</Typography>
			<Typography>{contactInfo.phone}</Typography>
			<Typography>{contactInfo.location}</Typography>
		</Box>
	);
}
