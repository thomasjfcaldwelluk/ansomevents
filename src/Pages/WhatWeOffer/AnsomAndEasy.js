import React from 'react';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Typography } from '@mui/material';
import { ansomAndEasyData } from './PackageData';

export default function AnsomAndEasy() {
	return (
		<Box
			component='main'
			id='ansom_and_easy'
			aria-label='Ansom and Easy Party Packs'>
			<PageTitle
				pageHeader={'Ansom and Easy Party Packs'}
				pageSubheader={'Effortless Party Hosting'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Planning something small but special? Our “Ansom & Easy” packs make
					party planning a total breeze. Just tell us your theme, and we’ll put
					together a gorgeous collection of pre-prepped decorations, ready for
					you to collect and style yourself. Perfect for those who want a
					beautiful, affordable setup without the fuss of full planning.
				</Typography>
				{ansomAndEasyData.map((item, index) => (
					<Box key={index}>
						<Typography
							component='p'
							variant='sectionHeader'
							sx={{ mt: 4, mb: 2 }}>
							{item.title}
						</Typography>
						{item.included && (
							<Box component='ul' sx={{ pl: 2, mb: 0 }}>
								{item.included.map((include, idx) => (
									<Typography component='li' variant='body2' key={idx}>
										{include}
									</Typography>
								))}
							</Box>
						)}
						{item.addOn && (
							<Box component='ul' sx={{ pl: 2, mb: 0 }}>
								{item.addOn.map((addOns, idx) => (
									<Typography component='li' variant='body2' key={idx}>
										{addOns}
									</Typography>
								))}
							</Box>
						)}
					</Box>
				))}
			</LayoutWrapper>
		</Box>
	);
}
