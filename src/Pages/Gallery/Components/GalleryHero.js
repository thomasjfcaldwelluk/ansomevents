import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import HeroImage from 'Components/ui/Image/HeroImage';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function GalleryHero({ pageHeader, pageSubHeader, mainImage }) {
	return (
		<SectionWrapper>
			<PageTitle pageHeader={pageHeader} pageSubheader={pageSubHeader} />
			<HeroImage src={mainImage} />
		</SectionWrapper>
	);
}
