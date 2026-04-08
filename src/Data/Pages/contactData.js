import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
		title: 'Prefer to talk?',
		subtitle: 'We’re always happy to chat through your ideas.',
		items: [
			{
				id: 'phone',
				label: 'Phone',
				value: '07310 009 764',
				href: 'tel:07310009764',
				icon: PhoneIphoneRoundedIcon,
			},
			{
				id: 'email',
				label: 'Email',
				value: 'info@ansomevents.com',
				href: 'mailto:info@ansomevents.com',
				icon: EmailRoundedIcon,
			},
			{
				id: 'location',
				label: 'Location',
				value: 'Based in Saltash, Cornwall, UK',
				icon: LocationCityRoundedIcon,
			},
		],

		socials: [
			{
				id: 'facebook',
				href: 'https://www.facebook.com/',
				icon: FacebookRoundedIcon,
			},
			{
				id: 'instagram',
				href: 'https://www.instagram.com/ansomevents/',
				icon: InstagramIcon,
			},
			{
				id: 'whatsapp',
				href: 'https://wa.me/447310009764',
				icon: WhatsAppIcon,
			},
		],
	},

	serviceArea: {
		id: 'service-area',
		title: 'Areas We Cover',
		paragraph:
			'We are based in Saltash, Cornwall, so we’re ideally located to serve clients across Cornwall and Devon. Over the years, we’ve built strong relationships with trusted venues, suppliers, and entertainers throughout the region, helping us bring everything together seamlessly. Whether you’re planning something local or a little further afield, we’re always happy to travel for the right event. Travel costs may apply for events outside of our core service area.',
		image:
			'https://res.cloudinary.com/djjqsmlei/image/upload/v1773750875/Ansom%20Events/ShineTable_zd9dfv.webp',
	},

	cta: {
		id: 'contact-cta',
		title: "We can't wait to hear about your event",
		subtitle:
			'Planning an event can feel overwhelming — we’re here to make it easy.',
	},
};
export default contactData;
