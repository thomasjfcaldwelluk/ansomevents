import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import us from '../../Assets/Photos/HomePageImages/OwnersPhoto.webp';
import them from '../../Assets/Photos/HomePageImages/ownersLandscape.webp';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '../../theme';
import { rows } from '../Home/Components/HomeData';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';

export default function About() {
	const isSmallScreen = useMediaQuery('(min-width:900px)');
	const imageUrl = isSmallScreen
		? us // Small screen image
		: them;

	return (
		<Box component={'main'} id='about_us' aria-label='About Ansom Events'>
			<Helmet>
				<title>
					Ansom Events: Your Leading Event Planners in Cornwall & Devon
				</title>
				<meta
					name='description'
					content='Ansom Events: premier wedding and corporate event planners for Cornwall and Devon. We create stress-free, beautifully styled events with guaranteed client satisfaction.'
				/>
				<meta
					name='keywords'
					content='Cornwall event planners, Devon wedding planning, corporate event specialists, luxury event company, Ansom Events story'
				/>
				<link rel='canonical' href='https://ansomevents.com/aboutus' />
				<meta
					property='og:title'
					content='Ansom Events: The Premier Planning Team for the South West'
				/>
				<meta
					property='og:description'
					content='Ansom Events are the premier wedding and corporate event planners for Cornwall and Devon. We create stress-free, beautifully styled events with guaranteed client satisfaction.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/about-us-team-photo.jpg' // Use a professional team photo or logo
				/>
				<meta property='og:url' content='https://ansomevents.com/aboutus' />
			</Helmet>
			<PageTitle
				pageHeader={'About Us At Ansom Events'}
				pageSubheader={'Learn About Us'}
			/>
			<LayoutWrapper>
				<Grid container spacing={1} alignItems={'stretch'}>
					{/* First Column: Image */}
					<Grid item size={{ xs: 12, md: 4 }}>
						<Box
							loading='lazy'
							component='img'
							src={imageUrl} // Replace with your image URL
							alt='Image of the Owners Of Ansom Events - Melissa Caldwell and Thomas Caldwell'
							title='Image of the Owners Of Ansom Events - Melissa Caldwell and Thomas Caldwell'
							sx={{
								width: { xs: '100%', md: '100%', lg: '80%' },
								borderRadius: '8px',
								height: '100%',
							}} // Ensures responsive image
						/>
					</Grid>

					{/* Second Column: Text */}
					<Grid item size={{ xs: 12, md: 8 }}>
						<Box height='100%'>
							<Typography component={'p'} variant='p'>
								We are a husband and wife team based in Cornwall, offering full
								event management, prop hire, and venue design. With over 20
								years of experience, Melissa brings her extensive knowledge of
								the events industry, while Thomas’s expertise in design and
								marketing ensures every detail is both creative and polished.
								Founded in autumn 2024, Ansom Events was born from a shared
								passion for creating unforgettable celebrations that feel
								personal, stylish, and completely stress-free. Whether it’s an
								intimate wedding, a corporate event, or a bold themed party, we
								pride ourselves on bringing fresh ideas, local knowledge, and a
								relaxed but professional approach to every project. Based in
								Cornwall and inspired by its creativity and community, we’re all
								about making the planning process as enjoyable as the event
								itself.
							</Typography>

							<Box sx={{ maxWidth: '700px', marginBlock: 4 }}>
								{rows.map((text, index) => (
									<Box
										key={index}
										alignItems='center'
										wrap='nowrap'
										marginBlock={2}
										spacing={{ xs: 3, sm: 1 }}>
										<CheckCircleIcon
											sx={{
												color: theme.palette.primaryText.main,
												display: 'inline',
												fontSize: 15,
											}}
										/>
										<Typography
											component={'p'}
											variant='titleText'
											display='inline'
											sx={{ marginInline: 1 }}>
											{text}
										</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</LayoutWrapper>
		</Box>
	);
}
