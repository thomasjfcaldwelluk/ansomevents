import React from 'react';
import Contact from '../Home/Components/Contact';
import { Box } from '@mui/material';
import ContactForm from './ContactForm';

export default function ContactPage() {
	return (
		<Box padding={2}>
			<Contact />
			{/* <ContactForm /> */}
		</Box>
	);
}
