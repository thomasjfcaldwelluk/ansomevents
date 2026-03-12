import React from 'react';
import navLinks from '../../../Data/Navigation/NavLinks';
import footerData from '../../../Data/Pages/footerData';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import GridLayout from '../GridLayout/GridLayout';
import IconWrapper from '../../ui/Icon/IconWrapper';
const footerLinks = navLinks.filter((link) => link.showInFooter);

export default function Footer({
	company,
	contact,
	socials,
	legal,
	copyright,
}) {
	return (
		<Box component={'footer'}>
			<SectionWrapper aria-label='Footer Main Section'>
				<GridLayout alignItems='flex-start'>
					<Grid item size={{ xs: 12, md: 6 }}>
						{footerData.company && (
							<Box>
								<Box
									component='img'
									src={footerData.company.logo}
									alt='Company Logo'
									sx={{ width: 150, mb: 2 }}
								/>
								{footerData.company.address.map((addressLine, index) => (
									<Typography variant='body1' component='p' key={index}>
										{addressLine}
									</Typography>
								))}
							</Box>
						)}
						{footerData.contact && (
							<Box>
								<Typography variant='body1' component='p'>
									{footerData.contact.phone}
								</Typography>
								<Typography variant='body1' component='p'>
									{footerData.contact.email}
								</Typography>
							</Box>
						)}
						{footerData.socials && (
							<Box>
								{footerData.socials.links.map((social, index) => (
									<IconButton key={index} href={social.url}>
										<IconWrapper
											Icon={social.icon}
											colorVariant='muted'
											size={{ xs: 12, sm: 22 }}
										/>
									</IconButton>
								))}
							</Box>
						)}
					</Grid>
					<Grid item size={{ xs: 12, md: 6 }}>
						<GridLayout spacing={1}>
							{footerLinks.map((link) => (
								<Grid item key={link.id} size={{ xs: 6 }}>
									<Typography
										variant='body1'
										sx={{
											textDecoration: 'none',
											color: 'text.primary',
											fontWeight: '500',
										}}
										component={RouterLink}
										to={link.path}>
										{link.label}
									</Typography>
								</Grid>
							))}
						</GridLayout>
					</Grid>
				</GridLayout>
			</SectionWrapper>
			<SectionWrapper variant='dark'>
				{footerData.legal && (
					<GridLayout marginBottom={5} spacing={0}>
						{footerData.legal.map((item) => (
							<Grid item key={item.id} size={{ xs: 4 }} textAlign={'center'}>
								<Typography
									key={item.id}
									href={item.path}
									component={RouterLink}
									variant='body1'
									sx={{
										fontWeight: '500',
										textDecoration: 'none',
										color: 'text.primary',
									}}>
									{item.label}
								</Typography>
							</Grid>
						))}
					</GridLayout>
				)}
				<Typography variant='body1' textAlign={'center'}>
					{footerData.copyright}
				</Typography>
			</SectionWrapper>
		</Box>
	);
}
