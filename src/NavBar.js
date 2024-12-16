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

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<AppBar
				component='header'
				position='static'
				sx={{ background: '#f2f9ff', color: 'black', boxShadow: 0 }}>
				<Toolbar>
					<Grid
						container
						sx={{
							width: '100%', // Ensures the container spans the full width
							margin: 0, // Resets any default margins
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						{/* Logo Section */}
						<Grid item size={{ xs: 6, sm: 4, md: 2 }}>
							<Box
								component='img'
								src={logo}
								alt='Logo of Ansom Events'
								title='Logo Of Ansom Events'
								loading='eager'
								padding={1}
								sx={{ width: '100%', height: 'auto' }}
							/>
						</Grid>

						{/* Menu Section */}
						<Grid
							item
							size={{ md: 6 }}
							sx={{
								display: { xs: 'none', md: 'flex' },
								justifyContent: 'center',
								fontWeight: '500',
								color: theme.palette.darkBlack.main,
								gap: 8,
							}}>
							<MuiLink
								component={Link}
								to='/'
								underline='hover'
								display='block'
								sx={{
									fontSize: '0.9rem',
									color: theme.palette.lightBlack.main,
									letterSpacing: '0.1rem',
									transition: 'all 0.3s ease',
									'&:hover': {
										color: theme.palette.darkBlack.main,
										fontWeight: '600',
									}, // Slightly darker background}}
								}}>
								Home
							</MuiLink>
							<MuiLink
								component={Link}
								to='/decorpackages'
								underline='hover'
								display='block'
								sx={{
									fontSize: '0.9rem',
									color: theme.palette.lightBlack.main,
									letterSpacing: '0.1rem',
									'&:hover': {
										color: theme.palette.darkBlack.main,
										fontWeight: '600',
									},
								}}>
								Decor Packages
							</MuiLink>
							<MuiLink
								component={Link}
								to='/latestspecials'
								underline='hover'
								display='block'
								sx={{
									fontSize: '0.9rem',
									color: theme.palette.lightBlack.main,
									letterSpacing: '0.1rem',
									'&:hover': {
										color: theme.palette.darkBlack.main,
										fontWeight: '600',
									},
								}}>
								Latest Specials
							</MuiLink>
						</Grid>

						{/* Social Media + Contact Section (Hidden on Tablet and Below) */}
						<Grid
							item
							size={{ md: 3 }}
							sx={{
								display: { xs: 'none', md: 'flex' },
								justifyContent: 'flex-end',
							}}>
							{/* <Box sx={{ marginRight: '2rem' }}>
								<IconButton href='https://facebook.com' target='_blank'>
									<FacebookIcon sx={{ fontSize: '35px', color: '#7096CE' }} />
								</IconButton>
								<IconButton href='https://instagram.com' target='_blank'>
									<InstagramIcon
										sx={{
											fontSize: '35px',
											color: '#7096CE',
										}}
									/>
								</IconButton>
							</Box> */}
							<Button
								component={Link}
								variant='outlined'
								to='/contact'
								sx={{
									borderColor: theme.palette.primaryBlue.main,
									color: theme.palette.primaryBlue.main,
									'&:hover': {
										borderColor: theme.palette.primaryBlue.secondary,
										color: theme.palette.primaryBlue.secondary,
									},
								}}>
								Contact Us
							</Button>
						</Grid>
						{/* Hamburger Menu for Medium and Below */}
						<Grid
							item
							sx={{
								display: { xs: 'flex', md: 'none' },
								justifyContent: 'flex-end',
							}}>
							<IconButton onClick={handleDrawerToggle}>
								<MenuIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>

			{/* Side Drawer for Medium Screens and Below */}
			<Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
				<Box
					sx={{ width: 250, padding: '2rem' }}
					role='presentation'
					onClick={handleDrawerToggle}>
					<MuiLink
						component={Link}
						to='/'
						underline='hover'
						display='block'
						sx={{ marginInline: '1rem' }}>
						Home
					</MuiLink>
					<MuiLink
						component={Link}
						to='/decorpackages'
						underline='hover'
						display='block'
						sx={{ marginInline: '1rem' }}>
						Decor Packages
					</MuiLink>
					<MuiLink
						component={Link}
						to='/latestspecials'
						underline='hover'
						display='block'
						sx={{ marginInline: '1rem' }}>
						Latest Specials
					</MuiLink>
				</Box>
			</Drawer>
		</>
	);
};

export default Navbar;
