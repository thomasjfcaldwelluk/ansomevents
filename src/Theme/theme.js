import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#FFC416',
			light: '#F6DC7C',
			dark: '#E0AA00',
		},
		secondary: {
			main: '#2E2E2E',
		},
		background: {
			default: '#FBFAF7',
			paper: '#FFFFFF',
			card: '#FBFAF7',
		},
		text: {
			primary: '#1F1F1F',
			secondary: '#6B6B6B',
		},
		divider: '#E8E3D3',
		brand: {
			header: '#1C3D5A',
			accentGold: '#C5A46D',
			charcoal: '#3B3C36',
		},
	},
	typography: {
		fontFamily: 'Montserrat,sans-serif',
		fontSize: 14,
		h1: { fontSize: '3.4rem', fontWeight: 600 },
		h2: {
			fontSize: '2.5rem',
			fontWeight: 500,
		},
		h3: {
			fontSize: '2rem',
			fontWeight: 500,
		},
		h4: {
			fontSize: '1.6rem',
			fontWeight: 500,
		},
		h5: {
			fontSize: '1.3rem',
			fontWeight: 500,
		},
		h6: {
			fontSize: '1.1rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.6,
		},
		body2: {
			fontSize: '1.15rem',
			lineHeight: 1.5,
		},
		button: {
			fontSize: '0.8rem',
		},
		caption: {
			fontSize: '1.28rem',
		},
		overline: {},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					textTransform: 'none',
					fontWeight: 600,
					padding: '10px 22px',
				},
			},
			variants: [
				{
					props: { variant: 'primary' },
					style: {
						backgroundColor: '#1C3D5A',
						color: '#fff',
					},
				},
				{
					props: { variant: 'secondary' },
					style: {
						backgroundColor: 'transparent',
						border: '2px solid #C5A46D',
						color: '#C5A46D',
					},
				},
			],
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
					padding: 2,
				},
			},
			variants: [
				{
					props: { variant: 'primary' },
					style: {
						backgroundColor: '#FEFEFC',
						border: '0.5px solid #E5E2D9',
						height: '100%',
						justifyContent: 'space-between',
					},
				},
			],
		},
		MuiCssBaseline: {
			styleOverrides: {
				'@keyframes fadeUp': {
					from: {
						opacity: 0,
						transform: 'translateY(20px)',
					},
					to: {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
				body: {
					backgroundColor: '#FBFAF7',
					margin: 0,
					padding: 0,
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
