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
		},
		primaryAccent: {
			secondary: '#C5A46D', //gold
		},
		primaryBlue: {
			main: '#7096CE',
			secondary: '#8DB7E1',
		},
		secondaryYellow: {
			main: '#FFC413',
			secondary: '#F7DD7D',
		},
		error: {
			main: '#f44336', // Customize error color
		},
		background: {
			default: '#f2f9ff', // Customize background color
			paper: '#ffffff', // Customize paper color
		},
		lightBlack: {
			main: '#2F2E2C',
		},
		darkBlack: {
			main: '#050505',
		},
		whiteText: {
			main: '#f2f3f4',
			darker: '#dfe0e0',
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
			'@media (max-width:600px)': {
				fontSize: '1.3rem',
			},
			fontWeight: 300,
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
			fontSize: '1.2rem',
			fontFamily: 'Playfair, serif',
			fontWeight: 700,
		},
		h6: {
			fontSize: '1rem',
			fontFamily: 'Playfair, serif',
			fontWeight: 700,
		},
		subtitle1: {},
		subtitle2: {},
		p: {
			color: '#4A4A4A',
			lineHeight: '1.6',
			fontWeight: '400',
			textAlign: 'left',
		},
		body2: {
			lineHeight: '1.6',
			fontWeight: '500',
			textAlign: 'left',
		},
		infoText: {
			color: '#6D5F4A',
			fontSize: 15,
			fontWeight: 300,
			alignText: 'center',
		},
		infoHeaderText: {
			fontSize: 18,
			textAlign: 'center',
			fontWeight: '500',
			color: '#3D3D3D',
		},
		listText: {
			fontSize: 15,
			color: '#6D5F4A',
			fontWeight: 400,
			// marginBlock: 1,
		},
		introText: {
			fontSize: 16,
			fontWeight: 300,
			color: '#4A4A4A',
		},
		descriptionText: {
			fontSize: 13,
			color: '#4A4A4A',
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
		// Add more component customizations as needed
	},
});

export default theme;
