import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopNav({ links }) {
	return (
		<Box display='flex' gap={1}>
			{links.map((link) => (
				<Button
					key={link.id}
					component={Link}
					to={link.path}
					color={link.button ? 'secondary' : 'inherit'}
					variant={link.button ? 'secondary' : 'text'}
					sx={{ fontWeight: link.button ? 600 : 400 }}>
					{link.label}
				</Button>
			))}
		</Box>
	);
}
