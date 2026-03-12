import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactServiceArea({ id, title, items }) {
	return (
		<SectionWrapper id={id} aria-label='Contact Service Area Section'>
			<SectionHeader sectionHeader={title} />
			<ul>
				{items.map((area) => (
					<li key={area}>{area}</li>
				))}
			</ul>
		</SectionWrapper>
	);
}
