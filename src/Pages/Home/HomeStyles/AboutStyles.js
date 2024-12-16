import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const AboutUsSectionContainer = styled(Box)(({ theme }) => ({}));
export const AboutUsContainer = styled(Grid)(({ theme }) => ({
	alignItems: 'center',
	padding: 5,
	display: 'flex',
}));
export const AboutUsImageContainer = styled(Box)(({ theme }) => ({}));
export const AboutUsImage = styled('img')(({ theme }) => ({
	width: { xs: '100%', md: '50%' },
	height: 'auto',
	borderRadius: '8px',
}));
