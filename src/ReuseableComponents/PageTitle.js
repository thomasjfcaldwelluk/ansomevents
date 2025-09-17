import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function PageTitle({
	pageHeader,
	pageSubheader,
	smallHeaderOnMobile = false,
	smallSubheaderOnMobile = false,
}) {
	return (
		<Stack alignItems='center' justifyContent={'center'}>
			<Typography
				variant='pageHeaderText'
				component={'h1'}
				sx={{
					...(smallHeaderOnMobile && {
						'@media (max-width:430px)': {
							fontSize: 18,
						},
					}),
				}}>
				{pageHeader}
			</Typography>
			<Typography
				variant='pageSubheaderText'
				component={'h2'}
				sx={{
					...(smallSubheaderOnMobile && {
						'@media (max-width:400px)': {
							fontSize: 12,
						},
					}),
				}}>
				{pageSubheader}
			</Typography>
		</Stack>
	);
}
