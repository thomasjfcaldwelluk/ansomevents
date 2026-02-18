import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopNav({ links }) {
	return (
		<Box display='flex' gap={2}>
			{links.map((link) => (
				<Button key={link.id} component={Link} to={link.path} color='inherit'>
					{link.label}
				</Button>
			))}
		</Box>
	);
}
