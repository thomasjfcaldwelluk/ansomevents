import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const ContactUsContainer = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.primaryBackground.main,
	borderRadius: '8px',
	display: 'flex',

	height: '100%',
}));
export const TitleContainer = styled(Grid)(({ theme }) => ({}));
export const Title = styled(Typography)(({ theme }) => ({}));
export const CallUsContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
}));

export const PhoneNumber = styled(Typography)(({ theme }) => ({
	fontSize: '1.2em',
	fontWeight: 500,
}));
export const EmailContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
}));
export const EmailAddress = styled(Typography)(({ theme }) => ({
	fontSize: '1.2em',
	fontWeight: 500,
}));
