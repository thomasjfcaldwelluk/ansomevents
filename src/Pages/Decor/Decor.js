import decorData from '../../Data/Pages/decorData';
import ctaDta from '../../Data/Pages/ctaData';
import DecorSection from './Components/DecorSection';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import DecorHero from './Components/DecorHero';
import CallToActSection from 'Components/Sections/CallToActSection/CallToActSection';
import SEO from 'Components/SEO';

export default function Decor() {
	return (
		<PageWrapper id='Ansom_Events_Decor' aria-label='Main Decor'>
			<SEO
				title='Decor Services | Ansom Events'
				description='Elevate your event with Ansom Events Decor Services. From elegant backdrops to vibrant balloon arrangements, we create unforgettable atmospheres for weddings, corporate events, and more.'
				url='https://www.ansomevents.com/decor'
				image='https://res.cloudinary.com/djjqsmlei/image/upload/v1774974054/Ansom%20Events/GalleryGrid/picnicTable_jxx6cm.webp'
			/>
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
