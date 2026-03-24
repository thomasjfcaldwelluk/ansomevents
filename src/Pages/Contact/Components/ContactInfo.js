import { Box, Typography } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function ContactInfo({ contactInfo }) {
	return (
		<Box
			id={contactInfo.id}
			aria-label='Contact Information Section'
			sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<SectionHeader sectionHeader={contactInfo.title} />
			<CenterBox
				key={contactInfo.id}
				flexDirection={'column'}
				alignItems='flex-start'
				gap={1}>
				<Typography variant='subtitle1'>{contactInfo.email}</Typography>
				<Typography>{contactInfo.phone}</Typography>
				<Typography>{contactInfo.location}</Typography>
			</CenterBox>
		</Box>
	);
}
