import { Button, Grid } from '@mui/material';
import CenterBox from 'Components/Layout/CenteredBox/CenterBox';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';
import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import SectionHeader from 'Components/ui/Typography/SectionHeader';
import React from 'react';

export default function CallToActSection({
	title,
	subTitle,
	buttonText,
	buttonLink,
	buttonVariant = 'primary',
	variant = 'light',
}) {
	return (
		<SectionWrapper variant={variant}>
			<SectionHeader sectionHeader={title} subHeader={subTitle} />
			<GridLayout>
				<Grid size={{ xs: 12 }}>
					<CenterBox>
						<Button variant={buttonVariant} href={buttonLink}>
							{buttonText}
						</Button>
					</CenterBox>
				</Grid>
			</GridLayout>
		</SectionWrapper>
	);
}
