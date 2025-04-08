import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('manepldw');
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				padding: 5,
				borderRadius: 1,
				backgroundColor: 'grey',
			}}>
			<TextField
				label='Name'
				id='name'
				type='text'
				name='name'
				variant='standard'
			/>
			<TextField
				label='Email'
				id='email'
				type='email'
				name='email'
				variant='standard'
			/>
			{/* <label htmlFor='email'>Email Address</label>
			<input id='email' type='email' name='email' /> */}
			<ValidationError prefix='Email' field='email' errors={state.errors} />

			<TextField
				id='message'
				name='message'
				label='Message Us'
				multiline
				rows={4}
				variant='standard'
			/>
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<Button type='submit' disabled={state.submitting}>
				Send Message
			</Button>
		</Box>
	);
}
