import { useState } from 'react';
import {
	IconButton,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function MobileNav({ links }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<MenuIcon />
			</IconButton>

			<Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
				<List sx={{ width: 250 }}>
					{links.map((link) => (
						<ListItemButton
							key={link.id}
							component={Link}
							to={link.path}
							color={link.button ? 'secondary' : 'inherit'}
							variant={link.button ? 'contained' : 'text'}
							onClick={() => setOpen(false)}>
							<ListItemText primary={link.label} />
						</ListItemButton>
					))}
				</List>
			</Drawer>
		</>
	);
}
