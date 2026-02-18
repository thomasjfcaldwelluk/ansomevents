import { Box } from '@mui/material';
import decorData from '../../Data/Pages/decorData';
import DecorSection from './Components/DecorSection';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function Decor() {
	return (
		<Box component='main' id='Ansom_Events_Decor' aria-label='Main Decor'>
			<PageWrapper>
				<PageTitle pageHeader='Decor' pageSubheader='Get it here' />
				<DecorSection {...decorData.packages} />
				<DecorSection {...decorData.backdrops} />
				<DecorSection {...decorData.props} />
				<DecorSection {...decorData.balloons} />
			</PageWrapper>
		</Box>
	);
}
