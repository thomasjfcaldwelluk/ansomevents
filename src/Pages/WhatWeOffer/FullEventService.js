import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import fullEventServiceImageOne from '../../../src/Assets/Photos/FullEvents/fullEventOne.webp';
import fullEventServiceImageTwo from '../../../src/Assets/Photos/FullEvents/fullEventTwo.webp';
import fullEventServiceImageThree from '../../../src/Assets/Photos/FullEvents/fullEventThree.webp';
import theme from '../../../src/theme';

const fullEventServiceImages = [
	fullEventServiceImageOne,
	fullEventServiceImageTwo,
	fullEventServiceImageThree,
];

export default function FullEventService() {
	return (
		<Box
			component='main'
			id='Full_Event_Service'
			aria-label='Full Event Service'>
			<PageTitle
				pageHeader={'Full Event Service'}
				pageSubheader={'Event Styling and Coordination'}
			/>
			<LayoutWrapper>
				<Typography component={'p'} variant='titleText'>
					Our Full Event Service is designed for those who want a seamless,
					stress-free event experience. From initial consultation to the final
					touches, we handle every detail of your event planning and styling.
					Whether it’s a wedding, corporate event, or private party, our team
					will work with you to create a stunning atmosphere that reflects your
					vision and exceeds your expectations.
				</Typography>
				<Grid container spacing={2} sx={{ my: 4, alignItems: 'stretch' }}>
					<Grid item size={{ xs: 12, md: 4 }}>
						<Box height='100%'>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									bgcolor: theme.palette.primaryBackground.secondary,
								}}>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography variant='h4' component='h3' align='center'>
										Silver
									</Typography>
									<Box component={'ul'}>
										<Typography variant='smallerP' component={'li'}>
											Welcome sign with easel
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Card box with simple table décor
										</Typography>
										<Typography
											component={'p'}
											variant='p'
											sx={{ fontWeight: '600' }}>
											Your choice of one photo backdrop:
										</Typography>
										<Typography variant='smallerP' component={'p'}>
											Either Arch with fabric & faux florals or Sailboard with
											balloon garland or Shimmer wall with balloon garland
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Styling for 5 guest tables + top couple’s table including
											- Table runners, faux white florals/greenery, LED candles
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 4 }}>
						<Box height='100%'>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									bgcolor: theme.palette.primaryBackground.secondary,
								}}>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography variant='h4' component='h3' align='center'>
										Gold
									</Typography>
									<Box component={'ul'}>
										<Typography
											component={'p'}
											variant='p'
											sx={{ mb: 2, fontWeight: '600' }}>
											Everything included in the Silver Package PLUS
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Styling for 8 guest tables
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Light-up LOVE sign or Seating Plan sign
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 4 }}>
						<Box height='100%'>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									bgcolor: theme.palette.primaryBackground.secondary,
								}}>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography variant='h4' component='h3' align='center'>
										Platinum
									</Typography>
									<Box component={'ul'}>
										<Typography
											component={'p'}
											variant='p'
											sx={{ mb: 2, fontWeight: '600' }}>
											Everything included in the Silver & Gold Packages PLUS
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Styling for up to 10 guest tables
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Chair covers & bows for up to 80 seats
										</Typography>
										<Typography variant='smallerP' component={'li'}>
											Both Love Sign & Seating plan sign included
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					</Grid>
				</Grid>
				<Box
					sx={{
						p: 2,
						bgcolor: theme.palette.primaryBackground.secondary,
						borderRadius: 2,
						boxShadow: 1,
					}}>
					<Typography component={'h4'} variant='h4' align='center'>
						Optional Add-Ons
					</Typography>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item size={{ xs: 12, md: 4 }}>
							<Typography
								component={'p'}
								variant='p'
								sx={{ fontWeight: '600' }}
								align='center'>
								Chair covers with bows
							</Typography>
						</Grid>
						<Grid item size={{ xs: 12, md: 4 }}>
							<Typography
								component={'p'}
								variant='p'
								sx={{ fontWeight: '600' }}
								align='center'>
								Personalised menus/place cards
							</Typography>
						</Grid>
						<Grid item size={{ xs: 12, md: 4 }}>
							<Typography
								component={'p'}
								variant='p'
								sx={{ fontWeight: '600' }}
								align='center'>
								On-the-day coordinator
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box padding={4}>
					<Typography component={'p'} variant='smallerP' align='center'>
						* All packages include delivery, setup & retrieval within Saltash.
						Delivery available across Cornwall & Devon (fees may apply).
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'grid',
						my: 4,
						gap: 2,
						gridTemplateColumns: {
							xs: '1fr', // Single column on mobile
							md: 'repeat(2, 1fr)', // 2 columns on desktop
						},
						gridTemplateRows: {
							xs: 'auto', // Let it stack naturally
							md: 'repeat(2, auto)', // 2 rows on desktop
						},
					}}>
					{/* Image 1: spans 2 rows on desktop */}
					<Box
						component='img'
						src={fullEventServiceImages[0]}
						alt='Image 1'
						sx={{
							width: '100%',
							height: '100%',
							boxShadow: 1,
							borderRadius: 2,
							objectFit: 'cover',
							gridColumn: {
								xs: '1', // Full width on xs
								md: '1 / 2', // Left column
							},
							gridRow: {
								xs: 'auto',
								md: '1 / span 2', // Span both rows
							},
						}}
					/>

					{/* Image 2: top right */}
					<Box
						component='img'
						src={fullEventServiceImages[1]}
						alt='Image 2'
						sx={{
							width: '100%',
							height: '100%',
							boxShadow: 1,
							borderRadius: 2,
							objectFit: 'cover',
							gridColumn: {
								xs: '1',
								md: '2 / 3',
							},
							gridRow: {
								xs: 'auto',
								md: '1 / 2',
							},
						}}
					/>

					{/* Image 3: bottom right */}
					<Box
						component='img'
						src={fullEventServiceImages[2]}
						alt='Image 3'
						sx={{
							width: '100%',
							boxShadow: 1,
							borderRadius: 2,
							height: '100%',
							objectFit: 'cover',
							gridColumn: {
								xs: '1',
								md: '2 / 3',
							},
							gridRow: {
								xs: 'auto',
								md: '2 / 3',
							},
						}}
					/>
				</Box>
			</LayoutWrapper>
		</Box>
	);
}
