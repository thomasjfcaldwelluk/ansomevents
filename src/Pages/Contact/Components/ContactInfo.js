import { Box, IconButton, Stack, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactInfo({ contactInfo }) {
	return (
		<Box
			id={contactInfo.id}
			aria-label='Contact Information Section'
			sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<SectionHeader
				sectionHeader={contactInfo.title}
				subHeader={contactInfo.subtitle}
			/>
			{contactInfo.items.map((item) => (
				<CenterBox key={item.id} padding={0} spacing={100}>
					<IconWrapper Icon={item.icon} size={30} colorVariant='muted' />
					<Typography variant='body1' sx={{ marginLeft: 1 }}>
						{item.label}:{' '}
						<a href={item.href} style={{ color: 'inherit' }}>
							{item.value}
						</a>
					</Typography>
				</CenterBox>
			))}
			<Stack direction='row' spacing={2} justifyContent='center' marginTop={4}>
				{contactInfo.socials.map((social) => (
					<IconButton
						component='a'
						href={social.href}
						target='_blank'
						rel='noopener noreferrer'>
						<IconWrapper Icon={social.icon} colorVariant='muted' size={30} />
					</IconButton>
				))}
			</Stack>
		</Box>
	);
}
