import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export default function PageTitle({ pageHeader, pageSubheader }) {
	return (
		<Stack alignItems='center' justifyContent={'center'} marginBottom={4}>
			<Typography variant='pageHeader' component={'h1'}>
				{pageHeader}
			</Typography>
			<Typography variant='pageSubHeader' component={'h2'}>
				{pageSubheader}
			</Typography>
		</Stack>
	);
}
