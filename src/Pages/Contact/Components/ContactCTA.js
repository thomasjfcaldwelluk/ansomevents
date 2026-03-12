import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactCTA({ id, title, subtitle }) {
	return (
		<SectionWrapper id={id} aria-label='Contact CTA Section'>
			<SectionHeader sectionHeader={title} subHeader={subtitle} />
		</SectionWrapper>
	);
}
