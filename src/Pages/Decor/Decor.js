import decorData from '../../Data/Pages/decorData';
import DecorSection from './Components/DecorSection';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import DecorHero from './Components/DecorHero';

export default function Decor() {
	return (
		<PageWrapper id='Ansom_Events_Decor' aria-label='Main Decor'>
			<DecorHero variant={'light'} />
			<DecorSection {...decorData.packages} variant={'dark'} />
			<DecorSection
				{...decorData.backdrops}
				variant={'light'}
				imageVariant='standard'
			/>
			<DecorSection
				{...decorData.props}
				variant={'dark'}
				imageVariant='rounded'
			/>
			<DecorSection {...decorData.balloons} variant={'light'} />
		</PageWrapper>
	);
}
