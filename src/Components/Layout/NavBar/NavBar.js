import React from 'react';
import navLinks from '../../../Data/Navigation/NavLinks';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Logo from './Components/Logo';
import MobileNav from './Components/MobileNav';
import DesktopNav from './Components/DesktopNav';
const desktopLinks = navLinks.filter((link) => link.showInNav);
const mobileLinks = navLinks.filter((link) => link.showInMobile);

export default function NavBar() {
	const theme = useTheme();
	const isTabletDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<AppBar position='sticky' sx={{ backgroundColor: 'background.default' }}>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Logo />
				{isTabletDown ? (
					<MobileNav links={mobileLinks} />
				) : (
					<DesktopNav links={desktopLinks} />
				)}
			</Toolbar>
		</AppBar>
	);
}
