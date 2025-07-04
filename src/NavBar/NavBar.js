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
import Grid from '@mui/material/Grid';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme';
import logo from '../Assets/Logo/AnsomEvents.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
		position: 'relative', // Required for ::after positioning
		textDecoration: 'none',
		transition: 'all 0.3s ease',

		'&::after': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: '-4px', // space below text
			width: '100%',
			height: '4px', // thickness of the line
			backgroundColor: theme.palette.primaryAccent.secondary,
			transform: 'scaleX(0)',
			transformOrigin: 'center',
			transition: 'transform 0.3s ease-in-out',
		},

		'&:hover': {
			color: theme.palette.primaryAccent.secondary,
			textDecoration: 'none',
		},

		'&:hover::after': {
			transform: 'scaleX(1)',
		},
	},

	navButtonContainer: {
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'flex-end',
	},
	navButton: {
		position: 'relative',
		overflow: 'hidden',
		borderColor: theme.palette.primaryHeader.secondary,
		color: theme.palette.primaryHeader.secondary,
		backgroundColor:
			'linear-gradient(to right, theme.palette.primaryHeader.secondary 50%, transparent 50%)',
		backgroundSize: '200% 100%',
		backgroundPosition: 'right bottom',
		transition: 'all 0.4s ease',
		'&:hover': {
			backgroundColor: theme.palette.primaryAccent.secondary,
			color: 'white',
			borderColor: 'transparent',
			backgroundPosition: 'left bottom',
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
	const [showOfferLinks, setShowOfferLinks] = useState(false);

	return (
		<Box component='header' id='header' aria-label='Header'>
			<AppBar
				position='static'
				sx={{ ...navBarStyles.appBarStyles }}
				id='nav'
				component='nav'
				aria-label='nav'>
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
			<Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
				<Box sx={{ ...navBarStyles.navDrawerContainer }} role='presentation'>
					<MuiLink
						component={Link}
						to='/'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						Home
					</MuiLink>

					<MuiLink
						component={Link}
						to='/services'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						Services
					</MuiLink>

					<Box
						onClick={() => setShowOfferLinks((prev) => !prev)}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							cursor: 'pointer',
							...navBarStyles.navDrawerLink,
						}}>
						What We Offer
						{showOfferLinks ? (
							<ExpandLessIcon sx={{ ml: 1 }} />
						) : (
							<ExpandMoreIcon sx={{ ml: 1 }} />
						)}
					</Box>

					{showOfferLinks && (
						<Box sx={{ pl: 2 }}>
							<MuiLink
								component={Link}
								to='/whatweoffer/packages'
								sx={{
									...navBarStyles.navDrawerLink,
									fontSize: 12,
									fontWeight: 550,
								}}
								onClick={handleDrawerToggle}>
								Decor Packages
							</MuiLink>
							<MuiLink
								component={Link}
								to='/whatweoffer/backdrops'
								sx={{
									...navBarStyles.navDrawerLink,
									fontSize: 12,
									fontWeight: 550,
								}}
								onClick={handleDrawerToggle}>
								Backdrops
							</MuiLink>
							<MuiLink
								component={Link}
								to='/whatweoffer/balloondisplays'
								sx={{
									...navBarStyles.navDrawerLink,
									fontSize: 12,
									fontWeight: 550,
								}}
								onClick={handleDrawerToggle}>
								Balloon Displays
							</MuiLink>
							<MuiLink
								component={Link}
								to='/whatweoffer/prophire'
								sx={{
									...navBarStyles.navDrawerLink,
									fontSize: 12,
									fontWeight: 550,
								}}
								onClick={handleDrawerToggle}>
								Prop Hire
							</MuiLink>
							<MuiLink
								component={Link}
								to='/whatweoffer/specialoffers'
								sx={{
									...navBarStyles.navDrawerLink,
									fontSize: 12,
									fontWeight: 550,
								}}
								onClick={handleDrawerToggle}>
								Special Offer On Decor
							</MuiLink>
						</Box>
					)}

					<MuiLink
						component={Link}
						to='/gallery'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						Gallery
					</MuiLink>
					<MuiLink
						component={Link}
						to='/aboutus'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						About Us
					</MuiLink>
					<MuiLink
						component={Link}
						to='/faqs'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						FAQs
					</MuiLink>
					<MuiLink
						component={Link}
						to='/contact'
						sx={{ ...navBarStyles.navDrawerLink }}
						onClick={handleDrawerToggle}>
						Contact Us
					</MuiLink>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Navbar;
