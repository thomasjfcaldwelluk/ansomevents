import PageTitle from '../../ReuseableComponents/PageTitle';
import LayoutWrapper from '../../ReuseableComponents/LayoutWrapper';
import { Box, Typography } from '@mui/material';
import { ansomAndEasyData } from './PackageData';
import imageOne from '../.././../src/Assets/Photos/AnsomAndEasy/partyPackOne.webp';
import imageTwo from '../.././../src/Assets/Photos/AnsomAndEasy/partyPackTwo.webp';
import imageThree from '../.././../src/Assets/Photos/AnsomAndEasy/partyPackThree.webp';
import { Helmet } from 'react-helmet-async';

export default function AnsomAndEasy() {
	return (
		<Box
			component='main'
			id='ansom_and_easy'
			aria-label='Ansom and Easy Party Packs'>
			<Helmet>
				<title>
					Ansom & Easy: Pre-Prepped DIY Party Decoration & Styling Packs
				</title>
				<meta
					name='description'
					content='Planning made easy! Our Ansom & Easy packs offer affordable, pre-prepped party decorations and styling kits ready for collection in Cornwall and Devon. Perfect for DIY events.'
				/>
				<meta
					name='keywords'
					content='DIY party decoration packs, affordable event styling, party kit hire Cornwall, easy decoration collection Devon, pre-prepped party supplies'
				/>
				<link
					rel='canonical'
					href='https://ansomevents.com/whatweoffer/ansom_and_easy'
				/>
				<meta
					property='og:title'
					content='Ansom & Easy: Stress-Free, Affordable DIY Party Decor Kits'
				/>
				<meta
					property='og:description'
					content='Discover the easy way to style your event! Get beautiful, pre-designed party kits ready for self-styling at an affordable price.'
				/>
				<meta
					property='og:image'
					content='https://ansomevents.com/images/ansom-easy-pack.jpg'
				/>
				<meta
					property='og:url'
					content='https://ansomevents.com/whatweoffer/ansom_and_easy'
				/>
			</Helmet>
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
				<Box
					display={'flex'}
					flexDirection={{ xs: 'column', md: 'row' }}
					sx={{ mt: 4 }}
					spacing={2}>
					{ansomAndEasyData.map((item, index) => (
						<Box key={index}>
							<Typography
								component='h3'
								variant='sectionHeader'
								sx={{ mt: 4, mb: 2 }}>
								{item.title}
							</Typography>
							{item.included && (
								<Box component='ul' sx={{ pl: 2, mb: 0 }}>
									{item.included.map((include, idx) => (
										<Typography component='li' variant='smallerP' key={idx}>
											{include}
										</Typography>
									))}
								</Box>
							)}
							<Typography
								component='h4'
								variant='sectionHeader'
								sx={{ mt: 2, mb: 1 }}>
								{item.extraTitle}
							</Typography>
							{item.addOn && (
								<Box component='ul' sx={{ pl: 2, mb: 0 }}>
									{item.addOn.map((addOns, idx) => (
										<Typography component='li' variant='smallerP' key={idx}>
											{addOns}
										</Typography>
									))}
								</Box>
							)}
						</Box>
					))}
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(6, 1fr)',
							gridTemplateRows: 'repeat(2, 200px)',
							gap: 2,
							padding: 2,
							width: '100%',
						}}>
						{/* Big Image - spans 2 columns and 2 rows */}
						<Box
							sx={{
								gridColumn: 'span 2',
								gridRow: 'span 2',
								backgroundImage: `url(${imageOne})`, // Replace with your image
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: 2,
							}}
						/>

						{/* Image 2 */}
						<Box
							sx={{
								gridColumn: 'span 4',
								gridRow: 'span 1',
								backgroundImage: `url(${imageTwo})`, // Replace with your image
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: 2,
								width: '100%',
							}}
						/>

						{/* Image 3 */}
						<Box
							sx={{
								gridColumn: 'span 4',
								gridRow: 'span 1',
								backgroundImage: `url(${imageThree})`, // Replace with your image
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								borderRadius: 2,
							}}
						/>
					</Box>
				</Box>
			</LayoutWrapper>
		</Box>
	);
}
