import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../Assets/Logo/AnsomEvents.svg';
import theme from '../theme';

const footerStyles = {
	footerContainer: {
		color: 'black',
		p: 4,
		background: theme.palette.primaryBackground.main,
	},
	footerLogo: {
		width: '250px',
		marginBottom: '1rem',
	},
	footerLink: {
		marginBottom: '1rem',
		marginInline: '0.2rem',
		textDecoration: 'none',
		color: theme.palette.primaryText.main,
	},
};
const getCurrentYear = () => new Date().getFullYear();

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
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Typography
							variant='h6'
							component='h4'
							sx={{ mb: 1, textAlign: 'center' }}>
							Links
						</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
						</Box>

						<Typography
							variant='caption'
							component={'p'}
							sx={{
								mt: 2,
								display: 'block',
								textAlign: 'center',
							}}>
							<MuiLink
								component={Link}
								sx={{ color: theme.palette.primaryText.secondary }}
								underline='hover'
								to='/termsandconditions'>
								Terms And Conditions
							</MuiLink>
						</Typography>
					</Box>
				</Grid>
				{/* Third Column */}
				<Grid item size={{ xs: 12, sm: 4 }}>
					<Box>
						<Typography variant='h6' component='h5' sx={{ mb: 1 }}>
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
							© {getCurrentYear()} Ansom Events. All rights reserved.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
