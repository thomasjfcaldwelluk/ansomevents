import { Divider } from '@mui/material';

export default function SectionDivider({ variant = 'default', spacing = 4 }) {
	return (
		<Divider
			sx={(theme) => ({
				my: spacing,

				...(variant === 'soft' && {
					borderColor: theme.palette.grey[200],
				}),

				...(variant === 'gold' && {
					borderColor: theme.palette.brand.accentGold,
					borderBottomWidth: 2,
					width: 60,
					margin: '10px auto',
				}),

				...(variant === 'faded' && {
					borderColor: 'transparent',
					background:
						'linear-gradient(to right, transparent, rgba(0,0,0,0.15), transparent)',
					height: 1,
				}),
			})}
		/>
	);
}
