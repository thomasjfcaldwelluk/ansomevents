import decorData from '../../Data/Pages/decorData';
import ctaDta from '../../Data/Pages/ctaData';
import DecorSection from './Components/DecorSection';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import DecorHero from './Components/DecorHero';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';

export default function Decor() {
	return (
		<PageWrapper id='Ansom_Events_Decor' aria-label='Main Decor'>
			<DecorHero variant={'light'} {...decorData.decorIntro} />
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
			<CallToActSection
				{...ctaDta.decor}
				variant='compact'
				buttonVariant='secondary'
			/>
		</PageWrapper>
	);
}
