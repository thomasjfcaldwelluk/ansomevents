import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import us from '../../Assets/Photos/HomePageImages/OwnersPhoto.jpg';
import them from '../../Assets/Photos/HomePageImages/ownersLandscape.jpg';
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
				<title>Ansom Events - Learn About Us</title>
				<meta
					name='description'
					content='Explore our gallery of beautifully styled weddings, parties, and corporate events across Cornwall and Devon.'
				/>
				<meta
					name='keywords'
					content='event gallery, wedding decor, party setups, event inspiration'
				/>
				<meta property='og:title' content='Ansom Events - Learn About Us' />
				<meta
					property='og:description'
					content='Get inspired by our past event setups and decorations.'
				/>
				<meta
					property='og:image'
					content='https://example.com/your-image.jpg'
				/>
				<meta property='og:url' content='https://ansomevents.com/gallery' />
				<link rel='canonical' href='https://ansomevents.com/gallery' />
			</Helmet>
			<PageTitle pageHeader={'About Us'} pageSubheader={'Learn About Us'} />
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
