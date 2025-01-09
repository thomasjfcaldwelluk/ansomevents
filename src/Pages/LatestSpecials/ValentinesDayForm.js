import React, { useState } from 'react';
import {
	Box,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
	FormControl,
	FormLabel,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const ValentinesDayForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		item: '',
		balloonType: '',
		collection: '',
		address: '',
		personalMessage: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data:', formData);
	};

	return (
		<Box sx={{ padding: 4, backgroundColor: 'white ' }}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={3} alignItems='stretch'>
					{/* Left Column */}
					<Grid
						item
						size={{ xs: 6 }}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}>
						<TextField
							fullWidth
							label='Name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							variant='outlined'
							required
						/>
						<Box mt={2}>
							<TextField
								fullWidth
								label='Email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								variant='outlined'
								type='email'
								required
							/>
						</Box>
						<Box mt={2}>
							<TextField
								fullWidth
								label='Phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								variant='outlined'
							/>
						</Box>
						<FormControl component='fieldset'>
							<RadioGroup
								name='item'
								value={formData.item}
								onChange={handleChange}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Typography>Balloon Stack</Typography>
										<FormControlLabel
											value='Balloon Stack'
											control={<Radio />}
											label='12.50'
										/>
									</Box>
									<Box>
										<Typography>Cup Cakes</Typography>
										<FormControlLabel
											value='Cup Cakes'
											control={<Radio />}
											label='12.50'
										/>
									</Box>
									<Box>
										<Typography>Both</Typography>
										<FormControlLabel
											value='Both'
											control={<Radio />}
											label='20.00'
										/>
									</Box>
								</Box>
							</RadioGroup>
						</FormControl>
					</Grid>

					{/* Right Column */}
					<Grid item size={{ xs: 6 }}>
						<FormControl component='fieldset'>
							<Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
								<FormLabel component='legend'>Type Of Balloon</FormLabel>
								<RadioGroup
									name='balloonType'
									value={formData.balloonType}
									onChange={handleChange}
									row>
									<FormControlLabel
										value='red'
										control={<Radio />}
										label='Red'
									/>
									<FormControlLabel
										value='pink'
										control={<Radio />}
										label='Pink'
									/>
								</RadioGroup>
							</Box>
						</FormControl>
						<FormControl component='fieldset'>
							<Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
								<FormLabel component='legend'>Collection</FormLabel>
								<RadioGroup
									name='collection'
									value={formData.collection}
									onChange={handleChange}
									row>
									<FormControlLabel
										value='pick up'
										control={<Radio />}
										label='Pick Up (pl12)'
									/>
									<FormControlLabel
										value='delivery'
										control={<Radio />}
										label='Delivery(5)'
									/>
								</RadioGroup>
							</Box>
						</FormControl>
						<Box mt={2}>
							<TextField
								fullWidth
								label='Address'
								name='address'
								value={formData.address}
								onChange={handleChange}
								variant='outlined'
							/>
						</Box>
						<FormControl component='fieldset'>
							<Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
								<FormLabel component='legend'>Personal Message</FormLabel>
								<RadioGroup
									name='Personal Message'
									value={formData.personalMessage}
									onChange={handleChange}
									row>
									<FormControlLabel value='no' control={<Radio />} label='No' />
									<FormControlLabel
										value='yes'
										control={<Radio />}
										label='Yes(5)'
									/>
								</RadioGroup>
							</Box>
						</FormControl>
						<Box mt={2}>
							<TextField
								fullWidth
								label='Message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								variant='outlined'
							/>
						</Box>

						<Grid item mt={2}>
							<Button type='submit' variant='contained'>
								Submit
							</Button>
						</Grid>
					</Grid>

					{/* Submit Button */}
				</Grid>
			</form>
		</Box>
	);
};

export default ValentinesDayForm;
