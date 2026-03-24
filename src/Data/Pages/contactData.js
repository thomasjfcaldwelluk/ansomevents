const contactData = {
	pageHeader: {
		id: 'contact-header',
		title: "Let's Plan Something Amazing",
		subtitle: "We'd love to hear about your event.",
	},
	form: {
		id: 'contact-form',
		title: 'Event Enquiry',
		fields: [
			{ name: 'name', label: 'Name', type: 'text', required: true },
			{ name: 'email', label: 'Email', type: 'email', required: true },
			{ name: 'phone', label: 'Phone', type: 'tel' },

			{
				name: 'eventType',
				label: 'Event Type',
				type: 'select',
				options: [
					'Wedding',
					'Corporate Event',
					'Birthday',
					'Baby Shower',
					'Engagement',
					'Other',
				],
			},
			{ name: 'eventDate', label: 'Event Date', type: 'date' },
			{ name: 'venue', label: 'Venue / Location', type: 'text' },
			{ name: 'guestCount', label: 'Guest Count', type: 'number' },

			{
				name: 'message',
				label: 'Tell us about your event',
				type: 'textarea',
			},
		],

		button: {
			label: 'Start Planning Your Event',
		},
	},
	contactInfo: {
		id: 'contact-info',
		title: 'Prefer to talk?',
		phone: '07310 009 764',
		email: 'info@ansomevents.com',
		location: 'Based in Cornwall',
	},

	serviceArea: {
		id: 'service-area',
		title: 'Areas We Cover',
		paragraph:
			'Based near Saltash, we proudly serve Cornwall, Devon, and surrounding areas.We regularly work across a wide range of venues and are happy to travel for the right event.Explore some of the locations we cover below, and if you don’t see your area listed, just ask! We’re always happy to discuss how we can bring our event planning expertise to your special day, no matter where it is.',
		areas: ['Cornwall', 'Devon', 'Dorset', 'Somerset', 'Bristol	'],
	},

	cta: {
		id: 'contact-cta',
		title: "We can't wait to hear about your event",
		subtitle:
			'Planning an event can feel overwhelming — we’re here to make it easy.',
	},
};
export default contactData;
