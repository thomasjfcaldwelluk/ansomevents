import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function PageTitle({ pageHeader, pageSubheader }) {
	return (
		<Stack alignItems='center' justifyContent={'center'}>
			<Typography variant='pageHeaderText' component={'h1'}>
				{pageHeader}
			</Typography>
			<Typography variant='pageSubheaderText' component={'h2'}>
				{pageSubheader}
			</Typography>
		</Stack>
	);
}
