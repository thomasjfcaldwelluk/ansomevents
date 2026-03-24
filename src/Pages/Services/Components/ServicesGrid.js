import { Grid } from '@mui/material';
import ServiceBlock from './ServicesBlock';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';

export default function ServicesGrid({ services }) {
	return (
		<GridLayout container>
			{services.map((block, index) => (
				<ServiceBlock key={index} {...block} />
			))}
		</GridLayout>
	);
}
