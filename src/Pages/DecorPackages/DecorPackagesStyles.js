import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const PackageContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignSelf: 'stretch',
	marginBottom: '1rem',
}));
export const PackageCardContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	padding: '1rem',
	borderRadius: '5px',
	background: theme.palette.primaryBackground.secondary,
	boxShadow: 1,
}));
export const ImageContainer = styled(Grid)(({ theme }) => ({}));
export const Image = styled('img')(({ theme }) => ({
	height: '100%',
	width: '100%',
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[3],
}));
export const ContentContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
}));
export const Title = styled(Typography)(({ theme }) => ({
	fontSize: '1.5em',
	fontWeight: 700,
	color: theme.palette.primaryHeader.main,
}));

export const DetailsContainer = styled(Grid)(({ theme }) => ({
	flexGrow: 2,
}));
export const DescriptionContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	marginBottom: '1rem',
	// paddingInline: '1rem',
}));
export const Description = styled('p')(({ theme }) => ({
	fontSize: '0.9em',
}));
export const InformationContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	paddingTop: '10px',
	flexDirection: 'column',
	alignItems: 'center',
	flex: '1 0 0',
}));

export const IncludedContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'stretch',
	[`@media (min-width: 426px) and (max-width: 899px)`]: {
		flexDirection: 'row',
	},
}));
export const IncludedTitleContainer = styled(Grid)(({ theme }) => ({}));
export const IncludedTitle = styled(Typography)(({ theme }) => ({
	fontSize: '13px',
	fontWeight: '600',
}));
export const IncludedTextContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	[`@media (min-width: 426px) and (max-width: 899px)`]: {
		flexDirection: 'row',
	},
}));
export const IncludedOne = styled(Typography)(({ theme }) => ({
	[`@media (min-width: 426px) and (max-width: 899px)`]: {
		// paddingInline: '1rem',
	},
}));
export const IncludedTwo = styled(Typography)(({ theme }) => ({}));
export const PriceContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	gap: '0.5em',
}));

/* ////////// Balloon Garland Styles ////////////// */

export const BalloonGarlandContainer = styled(Grid)(({ theme }) => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-around',
	flexDirection: 'column',
	borderRadius: '8px',
	background: theme.palette.primaryBackground.main,
	padding: '0.25rem',
}));

export const BalloonGarlandTitle = styled('h4')(({ theme }) => ({
	color: theme.palette.primaryHeader.secondary,
	textAlign: 'center',
}));
export const BalloonGarlandOptionsContainer = styled(Grid)(({ theme }) => ({
	display: 'flex;',
	// backgroundColor: 'pink',
	justifyContent: 'space-around',
}));
export const BalloonOption = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center',
	margin: '0.3em 0',
}));
export const BalloonOptionTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	fontSize: '0.9rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.6rem',
	},
}));
export const BalloonOptionImage = styled('img')(({ theme }) => ({
	width: '100px',
	borderRadius: theme.shape.borderRadius,
	[theme.breakpoints.down('sm')]: {
		width: '50px',
	},
}));
export const BalloonOptionPrice = styled(Typography)(({ theme }) => ({
	fontSize: '0.7rem',
}));
