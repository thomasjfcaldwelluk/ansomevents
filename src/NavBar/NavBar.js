// src/components/NavBar.js
import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Box,
	Drawer,
	Menu,
	MenuItem,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme';
import logo from '../Assets/Logo/AnsomEvents.svg';

const navBarStyles = {
	appBarStyles: {
		background: theme.palette.primaryBackground.main,
		color: theme.palette.primaryText.main,
		boxShadow: 0,
	},
	toolbarContainerStyles: {
		width: '100%',
		margin: 0,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navLogo: {
		width: '150px',
		height: 'auto',
		paddingBlock: 1,
	},
	navMenuContainer: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'space-around',
	},
	navMenuLink: {
		fontSize: '0.8rem',
		fontWeight: 500,
		color: theme.palette.primaryHeader.secondary,
		transition: 'all 0.3s ease',
		'&:hover': {
			color: theme.palette.primaryHover.main,
			textDecoration: 'none',
		},
	},
	navButtonContainer: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'flex-end',
	},
	navButton: {
		borderColor: theme.palette.primaryHeader.main,
		color: theme.palette.primaryHeader.main,
		'&:hover': {
			borderColor: theme.palette.primaryHeader.secondary,
			color: theme.palette.primaryHeader.secondary,
		},
	},
	navIconButtonContainer: {
		display: { xs: 'flex', md: 'none' },
		justifyContent: 'center',
	},
	navDrawerContainer: {
		width: 250,
	},
	navDrawerLink: {
		textDecoration: 'none',
		display: 'block',
		padding: 2,
		textAlign: 'center',
		color: theme.palette.primaryText.main,
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: theme.palette.primaryBackground.secondary,
		},
	},
};

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
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
							size={{ md: 8 }}
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
								to='/services'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Services
							</MuiLink>
							{/* New "What We Offer" dropdown */}
							<MuiLink
								component='button'
								onClick={handleMenuClick}
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								What We Offer
							</MuiLink>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}>
								<MenuItem onClick={handleMenuClose}>
									<Link
										to='/whatweoffer/packages'
										style={{
											textDecoration: 'none',
											...navBarStyles.navMenuLink,
										}}>
										Decor Packages
									</Link>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<Link
										to='/whatweoffer/backdrops'
										style={{
											textDecoration: 'none',
											...navBarStyles.navMenuLink,
										}}>
										Backdrops
									</Link>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<Link
										to='/whatweoffer/balloondisplays'
										style={{
											textDecoration: 'none',
											...navBarStyles.navMenuLink,
										}}>
										Balloon Displays
									</Link>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<Link
										to='/whatweoffer/prophire'
										style={{
											textDecoration: 'none',
											...navBarStyles.navMenuLink,
										}}>
										Prop Hire
									</Link>
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									<Link
										to='/whatweoffer/specialoffers'
										style={{
											textDecoration: 'none',
											...navBarStyles.navMenuLink,
										}}>
										Special Offer On Decor
									</Link>
								</MenuItem>
							</Menu>
							<MuiLink
								component={Link}
								to='/events'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Events
							</MuiLink>
							<MuiLink
								component={Link}
								to='/gallery'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								Gallery
							</MuiLink>
							<MuiLink
								component={Link}
								to='/aboutus'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								About Us
							</MuiLink>
							<MuiLink
								component={Link}
								to='/faqs'
								underline='hover'
								display='block'
								sx={{ ...navBarStyles.navMenuLink }}>
								FAQs
							</MuiLink>
						</Grid>
						{/* Contact Section (Hidden on Tablet and Below) */}
						<Grid
							item
							size={{ md: 2 }}
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
						to='/services'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Services
					</MuiLink>
					<MuiLink
						component={Link}
						to='/gallery'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Gallery
					</MuiLink>
					<MuiLink
						component={Link}
						to='/aboutus'
						sx={{ ...navBarStyles.navDrawerLink }}>
						About Us
					</MuiLink>
					<MuiLink
						component={Link}
						to='/faqs'
						sx={{ ...navBarStyles.navDrawerLink }}>
						FAQs
					</MuiLink>
					<MuiLink
						component={Link}
						to='/contact'
						sx={{ ...navBarStyles.navDrawerLink }}>
						Contact Us
					</MuiLink>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Navbar;
