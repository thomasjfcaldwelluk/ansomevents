import { Card, CardContent } from '@mui/material';
import React from 'react';
import IconWrapper from 'Components/ui/Icon/IconWrapper';
import CardTitle from 'Components/ui/Card/CardTitle';
import CardDescription from 'Components/ui/Card/CardDescription';

export default function ServicesCard({ title, text, icon }) {
	return (
		<Card variant='primary'>
			<CardContent sx={{ flexGrow: 1 }}>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{text}</CardDescription>
			</CardContent>
			<IconWrapper Icon={icon} colorVariant='gold' size={50} />
		</Card>
	);
}
