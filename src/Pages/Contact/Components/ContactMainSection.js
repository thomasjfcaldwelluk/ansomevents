import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { Grid } from '@mui/material';

export default function ContactMainSection({ form, contactInfo }) {
	return (
		<GridLayout>
			<Grid size={{ xs: 12, md: 5 }} aria-label='Contact Information'>
				<ContactInfo contactInfo={contactInfo} />
			</Grid>
			<Grid size={{ xs: 12, md: 7 }} aria-label='Contact Form'>
				<ContactForm form={form} />
			</Grid>
		</GridLayout>
	);
}
