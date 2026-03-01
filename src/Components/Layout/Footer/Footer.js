import React from 'react';
import navLinks from '../../../Data/Navigation/NavLinks';
import footerData from '../../../Data/Pages/footerData';
import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const footerLinks = navLinks.filter((link) => link.showInFooter);

export default function Footer(company, contact, socials, legal, copyright) {
	return (
		<Box component={'footer'}>
			{footerData.company && (
				<Box>
					<img src={footerData.company.logo} alt='Company Logo' />
					{footerData.company.address.map((addressLine, index) => (
						<p key={index}>{addressLine}</p>
					))}
				</Box>
			)}
			{footerData.contact && (
				<Box>
					<p>{footerData.contact.phone}</p>
					<p>{footerData.contact.email}</p>
				</Box>
			)}
			{footerData.socials && (
				<Box>
					{footerData.socials.links.map((social, index) => (
						<a key={index} href={social.url}>
							{social.name}
						</a>
					))}
				</Box>
			)}
			<Box sx={{ display: 'flex', gap: 2 }}>
				{footerLinks.map((link) => (
					<Button key={link.id} component={RouterLink} to={link.path}>
						{link.label}
					</Button>
				))}
			</Box>
			{footerData.legal && (
				<Box>
					{footerData.legal.map((item) => (
						<a key={item.id} href={item.path}>
							{item.label}
						</a>
					))}
				</Box>
			)}
			<p>{footerData.copyright}</p>
		</Box>
	);
}
