import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primaryBackground: {
			main: '#F8F5F0', //off white
			secondary: '#F2EFEA', // light grey
		},
		primaryHeader: {
			main: '#1C3D5A', // navy blue
			secondary: '#3D3D3D', // Charcoal Gray
		},
		primaryText: {
			main: '#4A4A4A', // dark grey
			secondary: '#6D5F4A', // warm taupe
			darker: '#333333', // Deep charcoal
		},
		primaryAccent: {
			primary: '#3B3C36', //Olive Charcoal
			secondary: '#C5A46D', //gold
		},

		primaryHover: {
			main: '#d3d3d3', //light grey
		},

		error: {
			main: '#f44336', // Customize error color
		},
	},
	typography: {
		responsiveFontSizes: true,
		fontFamily: 'Montserrat,sans-serif', // Customize font family
		fontSize: 14, // Customize base font size
		h1: {
			fontSize: '3.8rem',
			'@media (max-width:600px)': {
				fontSize: '2.5rem',
			},
			fontWeight: 600,
			color: '#1C3D5A',
		},
		h2: {
			fontSize: '1.9rem', // Default font size for small screens
			'@media (max-width:420px)': {
				fontSize: '1.45rem',
			},
			fontWeight: 500,
			color: '#2F2E2C',
		},
		h3: {
			fontSize: '1.1rem', // Default font size for small screens
			fontWeight: 200,
		},
		h4: {
			fontSize: '1.8rem',
			fontFamily: 'Playfair, serif',
			fontWeight: 700,
			color: '#1C3D5A',
		},
		h5: {
			fontSize: '1.1rem',
			fontFamily: 'Playfair, serif',
			fontWeight: 600,
			color: '#1C3D5A',
		},
		h6: {
			fontSize: '1rem',
			fontWeight: 550,
			color: '#4A4A4A',
		},
		pageHeaderText: {
			fontFamily: 'Playfair, serif',
			color: '#1C3D5A',
			fontSize: 40,
		},
		pageSubheaderText: {
			fontSize: 15,
			color: '#4A4A4A',
			marginTop: '-10px',
			fontWeight: 400,
		},
		titleText: {
			color: '#333333',
			fontSize: 15,
			fontWeight: 550,
		},
		p: {
			color: '#4A4A4A',
			lineHeight: '1.6',
			fontWeight: '400',
			textAlign: 'left',
			fontSize: 14,
		},
		smallerP: {
			color: '#4A4A4A',
			lineHeight: '1.6',
			fontWeight: '400',
			textAlign: 'left',
			fontSize: 12,
		},

		button: {},
		caption: {},
		overline: {},
		// Add more typography styles as needed
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px', // Customize button border radius
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#F8F5F0',
					margin: 0,
					padding: 0,
				},
			},
		},
	},
});

export default theme;
