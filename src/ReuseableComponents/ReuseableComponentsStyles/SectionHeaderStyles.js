import { Stack, styled } from '@mui/system';
import { Typography } from '@mui/material';

export const SectionHeaderContainer = styled(Stack)(({ theme }) => ({
	width: '100%',
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	marginBlock: '1rem',
}));

export const SectionHeaderText = styled(Typography)(({ theme }) => ({
	fontSize: '1.1rem',
	textTransform: 'uppercase',
	fontWeight: 600,
	letterSpacing: '0.1rem',
}));

export const SectionSubHeader = styled(Typography)(({ theme }) => ({
	fontSize: '1.8rem',
	fontWeight: 400,
	textAlign: 'center',
}));
