import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from '../../theme';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('manepldw');
	if (state.succeeded) {
		return (
			<Typography component={'p'} variant='titleText'>
				Thanks For Reaching Out - We're Respond Within 24 hours!
			</Typography>
		);
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
				backgroundColor: theme.palette.primaryBackground.secondary,
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
			<Button
				type='submit'
				disabled={state.submitting}
				sx={{
					backgroundColor: 'none',
					color: theme.palette.primaryHeader.primary,
				}}>
				Send Message
			</Button>
		</Box>
	);
}
