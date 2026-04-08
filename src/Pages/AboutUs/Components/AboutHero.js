import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import PageTitle from 'Components/ui/Typography/PageTitle';
import React from 'react';

export default function AboutHero({ id, title, text }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<PageTitle pageHeader={title} pageSubheader={text} />
		</SectionWrapper>
	);
}
