import { Grid } from '@mui/material';
import ServiceBlock from './ServicesBlock';
import { Fragment } from 'react';

export default function ServicesGrid({ services }) {
	return (
		<Grid container>
			{services.map((block, index) => (
				<ServiceBlock key={index} {...block} />
			))}
		</Grid>
	);
}
