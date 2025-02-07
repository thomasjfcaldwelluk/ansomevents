import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
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
			color: '#050505',
		},
		h2: {
			fontSize: '1.9rem', // Default font size for small screens
			fontFamily: 'ABeeZee,serif',

			'@media (max-width:600px)': {
				fontSize: '1.3rem',
			},
			fontWeight: 600,
			color: '#2F2E2C',
		},
		h3: {
			fontSize: '1.1rem', // Default font size for small screens
			fontWeight: 200,
		},
		h4: {
			fontSize: '1rem',
		},
		h5: {},
		h6: {},
		subtitle1: {},
		subtitle2: {},
		body1: {
			fontSize: '14px',
			lineHeight: '1.6',
			fontWeight: '400',
			textAlign: 'left',
		},
		body2: {
			fontSize: '16px',
			lineHeight: '1.6',
			fontWeight: '500',
			textAlign: 'left',
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
