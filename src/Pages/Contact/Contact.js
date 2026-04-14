import React from 'react';
import PageWrapper from 'Components/Layout/PageWrapper/PageWrapper';
import ContactHero from './Components/ContactHero';
import contactData from '../../Data/Pages/contactData';
import ContactServiceArea from './Components/ContactServiceArea';
import ContactCTA from './Components/ContactCTA';
import ContactMainSection from './Components/ContactMainSection';
import SEO from 'Components/SEO';

export default function Contact() {
	return (
		<PageWrapper id='contact' aria-label='Contact Ansom Events'>
			<SEO
				title='Contact Us - Ansom Events'
				description='Get in touch with Ansom Events for expert event planning services. Contact us today to start planning your unforgettable event.'
				url='https://www.ansomevents.com/contact-us'
				image='https://www.ansomevents.com/og-image.jpg'
			/>
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
