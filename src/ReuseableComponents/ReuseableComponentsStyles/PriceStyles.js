import { styled } from '@mui/system';
import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';

export const PriceSectionContainer = styled(Box)(({ theme }) => ({
	// backgroundColor: 'blue',
	padding: '1rem',
}));

export const PriceContainer = styled(Grid)(({ theme }) => ({
	// backgroundColor: 'yellow',
	display: 'flex,',
	justifyContent: 'center',
	alignItems: 'center',
}));
export const PriceText = styled(Typography)(({ theme }) => ({
	fontSize: '0.8rem',
}));
export const PriceAmountContainer = styled(Grid)(({ theme }) => ({
	// display: 'flex',
	alignItems: 'center',
	border: '1px solid black',
	borderRadius: '3px',
}));
export const PriceAmount = styled(Typography)(({ theme }) => ({
	fontSize: '1.1em',
	textAlign: 'center',
}));