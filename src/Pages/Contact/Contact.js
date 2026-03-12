import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ContactHero from './Components/ContactHero';
import contactData from '../../Data/Pages/contactData';
import ContactServiceArea from './Components/ContactServiceArea';
import ContactCTA from './Components/ContactCTA';
import ContactMainSection from './Components/ContactMainSection';

export default function Contact() {
	return (
		<PageWrapper id='contact' aria-label='Contact Ansom Events'>
			<ContactHero {...contactData.pageHeader} />
			<ContactMainSection
				form={contactData.form}
				contactInfo={contactData.contactInfo}
			/>
			<ContactServiceArea {...contactData.serviceArea} />
			<ContactCTA {...contactData.cta} />
		</PageWrapper>
	);
}
