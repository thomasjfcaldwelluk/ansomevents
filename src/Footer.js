import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../src/Assets/Logo/AnsomEvents.svg';

const footerStyles = {
	footerContainer: {
		color: 'black',
		p: 4,
		background: '#f2f9ff',
	},
	footerLogo: {
		width: '250px',
		marginBottom: '1rem',
	},
	footerLink: {
		width: '250px',
		marginBottom: '1rem',
	},
};

const Footer = () => {
	return (
		<Box component='footer' sx={{ ...footerStyles.footerContainer }}>
			<Grid container spacing={4}>
				<Grid item size={{ xs: 12, sm: 4 }}>
					<Box>
						<img
							src={logo}
							alt='Logo Of Ansom Events'
							title='Logo Of Ansom Events'
							loading='lazy'
							style={{ ...footerStyles.footerLogo }}
						/>
					</Box>
				</Grid>
				{/* Second Column */}
				<Grid item size={{ xs: 12, sm: 4 }}>
					<Box>
						<Typography variant='h4' component='h4' sx={{ mb: 1 }}>
							Links
						</Typography>
						<MuiLink
							component={Link}
							to='/decorpackages'
							sx={{ ...footerStyles.footerLink }}>
							Decor Packages
						</MuiLink>
						<MuiLink
							component={Link}
							to='/latestspecials'
							sx={{ ...footerStyles.footerLink }}>
							Latest Specials
						</MuiLink>

						<Typography
							variant='caption'
							component={'p'}
							sx={{ mt: 2, display: 'block' }}>
							<Link href='#section1' underline='hover'>
								Gallery
							</Link>{' '}
							|{' '}
							<Link href='#section1' underline='hover'>
								About Us
							</Link>
						</Typography>
					</Box>
				</Grid>
				{/* Third Column */}
				<Grid item size={{ xs: 12, sm: 4 }}>
					<Box>
						<Typography variant='h4' component='h4' sx={{ mb: 1 }}>
							Follow Us
						</Typography>
						<IconButton href='https://facebook.com' target='_blank'>
							<Facebook />
						</IconButton>
						<IconButton href='https://instagram.com' target='_blank'>
							<Instagram />
						</IconButton>
						<Typography
							variant='caption'
							component={'p'}
							sx={{ mt: 2, display: 'block' }}>
							© 2024 Ansom Events. All rights reserved.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
