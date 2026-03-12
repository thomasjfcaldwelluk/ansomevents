import { Box } from '@mui/material';

export default function LuxuryDivider({ icon = '✦' }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				my: 3,
				gap: 2,
				color: 'text.secondary',
			}}>
			<Box
				sx={{
					flex: 1,
					height: 1,
					backgroundColor: 'divider',
				}}
			/>

			<Box
				sx={{
					fontSize: 14,
					opacity: 0.7,
				}}>
				{icon}
			</Box>

			<Box
				sx={{
					flex: 1,
					height: 1,
					backgroundColor: 'divider',
				}}
			/>
		</Box>
	);
}
