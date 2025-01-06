import { Box, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submitted: ', formData);
		// Add your logic for sending data (e.g., EmailJS or API call)
	};
	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{
				maxWidth: 600,
				margin: 'auto',
				border: '1px solid #ddd',
				borderRadius: '8px',
			}}>
			<FormControl sx={{ width: '100%' }}>
				<Typography variant='h6' component='h2' textAlign='center'>
					Contact Us
				</Typography>
				<TextField
					label='Name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					fullWidth
					required
				/>
				<TextField
					label='Email'
					name='email'
					type='email'
					value={formData.email}
					onChange={handleChange}
					fullWidth
					required
				/>
				<TextField
					label='Message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					multiline
					rows={4}
					fullWidth
					required
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					sx={{ alignSelf: 'center', width: '50%' }}>
					Submit
				</Button>
			</FormControl>
		</Box>
	);
}
