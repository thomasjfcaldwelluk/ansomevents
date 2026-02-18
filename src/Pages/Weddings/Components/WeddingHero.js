import { Box, Typography } from '@mui/material';
import React from 'react';
import PageTitle from 'Components/ui/Typography/PageTitle';

export default function WeddingHero({ title, subtitle, image }) {
	return (
		<Box>
			<PageTitle pageHeader={title} pageSubheader={subtitle} />
		</Box>
	);
}
