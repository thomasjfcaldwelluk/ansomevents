import React from 'react';
import Contact from '../Home/Components/Contact';
import { Box } from '@mui/material';
import ContactForm from './ContactForm';
import theme from './../../theme';

export default function ContactPage() {
	return (
		<Box
			padding={2}
			sx={{ backgroundColor: theme.palette.primaryBackground.main }}>
			<Contact />
			{/* <ContactForm /> */}
			<Box marginBlock={7}></Box>
		</Box>
	);
}
