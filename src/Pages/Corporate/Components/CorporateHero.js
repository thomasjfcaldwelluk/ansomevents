import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import { Box, Button } from '@mui/material';

export default function CorporateHero({
	title,
	subtitle,
	primaryCta,
	secondaryCta,
	image,
	id,
}) {
	return (
		<SectionWrapper id={id} variant='light'>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
			<Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
				<Box
					component='img'
					src={image}
					alt='Corporate event example'
					sx={{
						width: '100%',
						maxWidth: '700px',
						borderRadius: 2,
					}}
				/>
			</Box>
			<Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
				<Button variant='primary' href={primaryCta.link}>
					{primaryCta.label}
				</Button>
				<Button variant='secondary' href={secondaryCta.link}>
					{secondaryCta.label}
				</Button>
			</Box>
		</SectionWrapper>
	);
}
