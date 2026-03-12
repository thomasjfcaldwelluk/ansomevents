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
			subtle: '#F4F1E8',
			dark: '#234A6B',
		},
		text: {
			primary: '#1F1F1F',
			secondary: '#6B6B6B',
		},
		divider: '#E8E3D3',
		brand: {
			header: '#1C3D5A',
			accentGold: '#C5A46D',
		},
	},
	typography: {
		fontFamily: 'Montserrat,sans-serif',
		fontSize: 14,
		h1: { fontSize: '3.4rem', fontWeight: 600 },
		h2: {
			fontSize: '2.5rem',
			fontWeight: 400,
		},
		h3: {
			fontSize: '1.5rem',
			fontWeight: 500,
		},
		h4: {
			fontSize: '1.6rem',
			fontWeight: 500,
		},
		h5: {
			fontSize: 'clamp(1.1rem, 1.7vw, 1.4rem)',
			fontWeight: 600,
			lineHeight: 1.3,
		},
		h6: {
			fontSize: '1rem',
			fontWeight: 600,
		},
		body1: {
			fontSize: '0.8rem',
			lineHeight: 1.6,
		},
		body2: {
			fontFamily: '"Playfair Display", serif',
			fontSize: '1.1rem',
			lineHeight: 1.5,
			fontWeight: 500,
			color: '#1C3D5A',
		},
		button: {
			fontSize: '0.8rem',
		},
		caption: {
			fontSize: '1.28rem',
		},
		label: {
			fontSize: '0.7rem',
			fontWeight: 600,
			letterSpacing: '0.02em',
			textTransform: 'uppercase',
			textAlign: 'center',
			color: '#0f0f0e',
			marginBottom: 4,
		},
		pageHeader: {
			fontFamily: '"Playfair Display", serif',
			fontSize: '2.8rem',
			fontWeight: 700,
			lineHeight: 1.15,
			letterSpacing: '-0.02em',
			color: '#1C3D5A',
		},
		pageSubHeader: {
			fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
			fontWeight: 300,
			letterSpacing: '0.01em',
			lineHeight: 1.15,
			color: '#1C3D5A',
		},
		sectionHeader: {
			fontFamily: '"Playfair Display", serif',
			fontSize: '2rem',
			fontWeight: 600,
			lineHeight: 1.25,
			letterSpacing: '-0.01em',
			marginBottom: 10,
		},
		cardHeader: {
			fontSize: '1.2rem',
			fontWeight: 550,
			lineHeight: 1.35,
			letterSpacing: '-0.01em',
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
					// padding: 2,
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					overflow: 'hidden',
				},
			},
			variants: [
				{
					props: { variant: 'primary' },
					style: {
						backgroundColor: '#FEFEFC',
						border: '0.5px solid #E8E3D3',
					},
				},
				{
					props: { variant: 'secondary' },
					style: {
						backgroundColor: '#ffffd6',
						border: '0.5px solid #373737',
					},
				},
				{
					props: { variant: 'transparent' },
					style: {
						backgroundColor: 'transparent',
						boxShadow: 'none',
						border: 'none',
						padding: 0,
					},
				},
			],
		},
		MuiCardMedia: {
			variants: [
				{
					props: { variant: 'standard' },
					style: {
						height: 300,
						objectFit: 'cover',
						borderTopLeftRadius: 12,
						borderTopRightRadius: 12,
					},
				},
				{
					props: { variant: 'rounded' },
					style: {
						height: 200,
						objectFit: 'cover',
						borderRadius: 12,
					},
				},
				{
					props: { variant: 'long' },
					style: {
						height: 400,
						objectFit: 'cover',
						borderRadius: 12,
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
					backgroundColor: '#F7F5EF',
					margin: 0,
					padding: 0,
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
