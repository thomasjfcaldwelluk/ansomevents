import { Divider } from '@mui/material';

export default function SectionDivider({ variant = 'default', spacing = 4 }) {
	return (
		<Divider
			sx={(theme) => ({
				my: spacing,

				...(variant === 'soft' && {
					borderColor: theme.palette.grey[200],
					borderBottomWidth: 2,
					width: 60,
					margin: '10px auto',
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
				...(variant === 'accentCenter' && {
					width: 80,
					height: 3,
					border: 'none',
					backgroundColor: theme.palette.brand.accentGold,
					borderRadius: 10,
					margin: '16px auto',
				}),

				...(variant === 'gradientSoft' && {
					border: 'none',
					height: 1,
					background: `linear-gradient(
            to right,
            transparent,
            ${theme.palette.divider},
            transparent
          )`,
				}),

				...(variant === 'inset' && {
					width: 40,
					borderBottomWidth: 2,
					borderColor: theme.palette.divider,
					margin: '12px 0',
				}),

				...(variant === 'spacer' && {
					border: 'none',
					height: spacing * 4,
				}),

				...(variant === 'softGoldFade' && {
					border: 'none',
					height: 1,
					background: `linear-gradient(
            to right,
            transparent,
            ${theme.palette.brand.accentGold},
            transparent
          )`,
					opacity: 0.4,
				}),

				...(variant === 'darkSection' && {
					border: 'none',
					height: 1,
					background: `linear-gradient(
            to right,
            transparent,
            ${theme.palette.background.dark},
            transparent
          )`,
					opacity: 0.3,
				}),
			})}
		/>
	);
}
