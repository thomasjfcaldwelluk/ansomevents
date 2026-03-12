import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ContactForm({ form }) {
	return (
		<Box id={form.id} aria-label='Contact Form Section'>
			<Typography>{form.title}</Typography>
			<Typography>{form.description}</Typography>
			<Typography>{form.email}</Typography>
			<Typography>{form.phone}</Typography>
		</Box>
	);
}
