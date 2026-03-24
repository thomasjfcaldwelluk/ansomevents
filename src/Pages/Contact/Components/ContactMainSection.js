import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import React from 'react';
import ContactInfo from './ContactInfo';
import { Grid } from '@mui/material';
import ContactForm from 'Components/Forms/ContactForm/ContactForm';

export default function ContactMainSection({ form, contactInfo }) {
	return (
		<GridLayout>
			<Grid size={{ xs: 12, md: 5 }} aria-label='Contact Information'>
				<ContactInfo contactInfo={contactInfo} />
			</Grid>
			<Grid size={{ xs: 12, md: 7 }} aria-label='Contact Form'>
				<ContactForm />
			</Grid>
		</GridLayout>
	);
}
