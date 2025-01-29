// src/components/NavBar.js
import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Box,
	Drawer,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';
import logo from './Assets/Logo/AnsomEvents.svg';

const navBarStyles = {
	appBarStyles: {
		background: '#f2f9ff',
		color: 'black',
		boxShadow: 0,
	},
	toolbarContainerStyles: {
		width: '100%', // Ensures the container spans the full width
		margin: 0, // Resets any default margins
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navLogo: {
		width: '100%',
		height: 'auto',
		padding: 1,
	},
	navMenuContainer: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'center',
		fontWeight: '500',
		color: theme.palette.darkBlack.main,
		gap: 8,
	},
	navMenuLink: {
		fontSize: '0.9rem',
		color: theme.palette.lightBlack.main,
		letterSpacing: '0.1rem',
		transition: 'all 0.3s ease',
		'&:hover': {
			color: theme.palette.darkBlack.main,
			fontWeight: '600',
		},
	},
	navButtonContainer: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'flex-end',
	},
	navButton: {
		borderColor: theme.palette.primaryBlue.main,
		color: theme.palette.primaryBlue.main,
		'&:hover': {
			borderColor: theme.palette.primaryBlue.secondary,
			color: theme.palette.primaryBlue.secondary,
		},
	},
	navIconButtonContainer: {
		display: { xs: 'flex', md: 'none' },
		justifyContent: 'flex-end',
	},
	navDrawerContainer: {
		width: 250,
	},
	navDrawerLink: {
		textDecoration: 'none',
		display: 'block',
		padding: 2,
		textAlign: 'center',
		color: theme.palette.darkBlack.main,
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: theme.palette.primaryBlue.main,
			color: theme.palette.background.default,
		},
	},
};

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<Box component='header'>
			<AppBar position='static' sx={{ ...navBarStyles.appBarStyles }}>
				<Toolbar>
					<Grid container sx={{ ...navBarStyles.toolbarContainerStyles }}>
						{/* Logo Section */}
						<Grid item size={{ xs: 6, sm: 4, md: 2 }}>
							<Box
								component='img'
								src={logo}
								alt='Logo of Ansom Events'
								title='Logo Of Ansom Events'
								loading='eager'
								sx={{ ...navBarStyles.navLogo }}
							/>
						</Grid>
						{/* Menu Section */}
						<Grid
							item
							size={{ md: 6 }}
							sx={{ ...navBarStyles.navMenuContainer }}>
							<MuiLink
								component={Link}
								to='/'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Home
							</MuiLink>
							<MuiLink
								component={Link}
								to='/decorpackages'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Decor Packages
							</MuiLink>
							<MuiLink
								component={Link}
								to='/latestspecials'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Latest Specials
							</MuiLink>
						</Grid>
						{/* Social Media + Contact Section (Hidden on Tablet and Below) */}
						<Grid
							item
							size={{ md: 3 }}
							sx={{ ...navBarStyles.navButtonContainer }}>
							<Button
								component={Link}
								variant='outlined'
								to='/contact'
								sx={{ ...navBarStyles.navButton }}>
								Contact Us
							</Button>
						</Grid>
						{/* Hamburger Menu for Medium and Below */}
						<Grid item sx={{ ...navBarStyles.navIconButtonContainer }}>
							<IconButton onClick={handleDrawerToggle}>
								<MenuIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>

			{/* Side Drawer for Medium Screens and Below */}
			<Drawer
				item='true'
				anchor='right'
				open={drawerOpen}
				onClose={handleDrawerToggle}>
				<Box
					sx={{ ...navBarStyles.navDrawerContainer }}
					role='presentation'
					onClick={handleDrawerToggle}>
					<MuiLink
						component={Link}
						to='/'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Home
					</MuiLink>
					<MuiLink
						component={Link}
						to='/decorpackages'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Decor Packages
					</MuiLink>
					<MuiLink
						component={Link}
						to='/latestspecials'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Latest Specials
					</MuiLink>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Navbar;
