import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SectionHeader from '../../ReuseableComponents/SectionHeader';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from '../../theme';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm';

const contactInfo = [
	{
		index: 1,
		title: 'Email',
		href: 'mailto:info@ansomevents.com',
		information: 'info@ansomevents.com',
		icon: (
			<EmailIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		description:
			'We aim to respond to all emails within 24 hours. Your inquiries are important to us!',
	},
	{
		index: 2,
		title: 'Telephone',
		href: 'tel:+447310009764',
		information: '07310009764',
		icon: (
			<PhoneIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		description: 'Feel free to call or text us anytime. We are here for you',
	},
	{
		index: 3,
		title: 'Facebook',
		href: 'https://www.facebook.com/profile.php?id=61566721061832',
		information: '@ansomevents',
		icon: (
			<FacebookIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		description:
			'Connect with us on Facebook Messenger anytime and follow us for the latest updates!',
	},
	{
		index: 4,
		title: 'Instagram',
		href: 'https://www.instagram.com/ansomeventsuk/',
		information: '@ansomeventsuk',
		icon: (
			<InstagramIcon
				sx={{ fontSize: 25, color: theme.palette.primaryAccent.secondary }}
			/>
		),
		description:
			'Reach out to us on Instagram and follow us for updates and inspiration!',
	},
];

export default function Contact() {
	return (
		<Element name='contact-section'>
			<Box
				sx={{ backgroundColor: theme.palette.primaryBackground.main }}
				padding={4}
				component='section'
				className='Contact_Ansom_Events'>
				<SectionHeader
					sectionHeader='Contact Us'
					sectionSubheader='We Would Love To Hear About Your Events'
					color={theme.palette.primaryHeader.main}
				/>

				<Grid
					container
					maxWidth={'1200px'}
					minWidth={'320px'}
					spacing={2}
					margin={'0 auto'}>
					<Grid item size={{ xs: 12, md: 6 }} sx={{ backgroundColor: 'red' }}>
						{contactInfo.map((data, index) => (
							<Grid container key={index} marginBlock={1}>
								<Grid item size={12}>
									<Box>
										<Typography>{data.title}</Typography>
										<Box component={'a'} href={data.href}>
											{data.icon}
										</Box>
									</Box>
								</Grid>
								<Grid item size={12}>
									<Box>
										<Typography>{data.information}</Typography>
									</Box>
								</Grid>
							</Grid>
						))}
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }} justifyContent={'center'}>
						<ContactForm />
					</Grid>
				</Grid>
			</Box>
		</Element>
	);
}
