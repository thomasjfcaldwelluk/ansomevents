import { Box, Grid, Typography } from '@mui/material';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function AboutTeam({ id, title, members }) {
	return (
		<SectionWrapper id={id} variant='light'>
			<SectionHeader sectionHeader={title} />
			<GridLayout>
				{members.map((member, index) => (
					<Grid
						key={index}
						size={{ xs: 12, md: 6 }}
						sx={{ textAlign: 'center' }}>
						<Box
							component={'img'}
							src={member.photo}
							alt={`${member.name}'s photo`}
							sx={{ width: '50%' }}
						/>
						<Typography variant='h5'>{member.name}</Typography>
						<Typography variant='body2' color='text.secondary'>
							{member.role}
						</Typography>
						<Typography variant='body1' sx={{ padding: 4, textAlign: 'left' }}>
							{member.bio}
						</Typography>
					</Grid>
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
