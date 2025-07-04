import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from '../../theme';
import ContactForm from './ContactForm';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

const contactInfo = [
	{
		index: 1,
		title: 'Email',
		href: 'mailto:info@ansomevents.com',
		information: 'info@ansomevents.com',
		icon: (
			<EmailIcon
				sx={{ fontSize: 20, color: theme.palette.primaryHover.main }}
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
				sx={{ fontSize: 20, color: theme.palette.primaryHover.main }}
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
				sx={{ fontSize: 20, color: theme.palette.primaryHover.main }}
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
				sx={{ fontSize: 20, color: theme.palette.primaryHover.main }}
			/>
		),
		description:
			'Reach out to us on Instagram and follow us for updates and inspiration!',
	},
];

export default function Contact() {
	return (
		<Box component={'main'} id='contact' aria-label='Contact Ansom Events'>
			<PageTitle
				pageHeader={'Contact Us'}
				pageSubheader={'Looking To Book? Have A Question?'}
			/>
			<LayoutWrapper>
				<Grid container spacing={2}>
					<Grid item size={{ xs: 12, md: 6 }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}>
							<Box>
								<Typography component={'p'} variant='p'>
									We’d love to hear from you! Whether you're planning a
									celebration, have questions about our services, or just want
									to say hello, feel free to reach out. At Ansom Events, we’re
									here to make your experience as smooth and exciting as
									possible. Fill out the form below or drop us a message – let’s
									start bringing your vision to life!
								</Typography>
							</Box>
							<Box marginBlock={4}>
								{contactInfo.map((data, index) => (
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										key={index}>
										<Box
											component={'a'}
											href={data.href}
											sx={{ marginInline: 1, marginTop: 1 }}>
											{data.icon}
										</Box>
										<Typography component={'p'} variant='titleText' margin={0}>
											{data.information}
										</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }} justifyContent={'center'}>
						<ContactForm />
					</Grid>
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
