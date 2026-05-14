import React from 'react';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import TestimonialsCarousel from './Components/TestimonialsCarousel';

export default function Testimonials({ title, subtitle, items }) {
	return (
		<SectionWrapper id='testimonials' variant='dark'>
			<SectionHeader sectionHeader={title} subHeader={subtitle} />
			<TestimonialsCarousel items={items} />
		</SectionWrapper>
	);
}
