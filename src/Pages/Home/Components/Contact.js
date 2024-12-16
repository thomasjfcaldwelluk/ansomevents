import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import theme from '../../../theme';

const contactInfo = [
	{
		index: 1,
		title: 'Email',
		href: 'mailto:info@ansomevents.com',
		information: 'info@ansomevents.com',
		icon: <EmailIcon />,
		description:
			'We aim to respond to all emails within 24 hours. Your inquiries are important to us!',
	},
	{
		index: 2,
		title: 'Telephone',
		href: 'tel:+447310009764',
		information: '07310009764',
		icon: <PhoneIcon />,
		description: 'Feel free to call or text us anytime. We are here for you',
	},
	{
		index: 3,
		title: 'Facebook',
		href: 'https://www.facebook.com/profile.php?id=61566721061832',
		information: '@ansomevents',
		icon: <FacebookIcon />,
		description:
			'Connect with us on Facebook Messenger anytime and follow us for the latest updates!',
	},
	{
		index: 4,
		title: 'Instagram',
		href: 'https://www.instagram.com/ansomeventsuk/',
		information: '@ansomeventsuk',
		icon: <InstagramIcon />,
		description:
			'Reach out to us on Instagram and follow us for updates and inspiration!',
	},
];

export default function Contact() {
	return (
		<Box sx={{ backgroundColor: theme.palette.background.default }} padding={4}>
			<SectionHeader
				sectionHeader='Contact Us'
				sectionSubheader='We Would Love To Hear About Your Events'
				color={theme.palette.darkBlack.main}
			/>
			<Grid
				container
				spacing={5}
				sx={{ height: '100%', paddingInline: 4, marginBlock: 4 }}>
				{contactInfo.map((data, index) => (
					<Grid
						item
						size={{ xs: 12, sm: 6, md: 3 }}
						key={index}
						sx={{
							display: 'flex',
							alignItems: 'stretch', // Ensures all items are the same height
							justifyContent: 'center',
						}}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								padding: theme.spacing(3),
								backgroundColor: theme.palette.background.paper,
								height: '100%',
								borderRadius: 2,
								boxShadow: 1,
								width: '100%',
							}}>
							{/* Icon */}
							<Box sx={{ fontSize: '2rem' }}>{data.icon}</Box>

							{/* Title */}
							<Typography
								variant='h4'
								component='h4'
								sx={{ margin: '-15px 0 15px 0', fontSize: '1.5rem' }}>
								{data.title}
							</Typography>

							{/* Link */}
							<Link
								href={data.href}
								target='_blank'
								rel='noopener'
								sx={{
									marginBottom: 1,
									color: theme.palette.lightBlack.main,
									textDecoration: 'none',
								}}>
								{data.information}
							</Link>
							<Typography sx={{ fontSize: '0.7rem' }}>
								{data.description}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
