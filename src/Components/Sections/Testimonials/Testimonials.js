import React from 'react';
import TestimonialsDisplay from './Components/TestimonialsDisplay';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';

export default function Testimonials({ title, subtitle, items }) {
	return (
		<SectionWrapper
			id='testimonials'
			variant='dark'
			sx={{ scrollMarginTop: '80px' }}>
			<SectionHeader sectionHeader={title} subHeader={subtitle} />
			<TestimonialsDisplay items={items} />
		</SectionWrapper>
	);
}
