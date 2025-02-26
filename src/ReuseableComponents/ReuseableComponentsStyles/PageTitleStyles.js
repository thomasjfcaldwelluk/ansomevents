import { Stack, styled } from '@mui/system';
import { Typography } from '@mui/material';

export const PageTitleContainer = styled(Stack)(({ theme }) => ({
	width: '100%',
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	marginBlock: '1rem',
}));

export const PageHeader = styled(Typography)(({ theme }) => ({
	fontSize: '1.1rem',
	textTransform: 'uppercase',
	fontWeight: 900,
}));

export const PageSubheader = styled(Typography)(({ theme }) => ({
	fontSize: '1.8rem',
	fontWeight: 900,
	textAlign: 'center',
}));
