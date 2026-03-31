import SectionWrapper from 'Components/Layout/SectionWrapper/SectionWrapper';
import ServiceBlock from './ServicesBlock';
import GridLayout from 'Components/Layout/GridLayout/GridLayout';

export default function ServicesGrid({ services }) {
	return (
		<SectionWrapper variant='dark'>
			<GridLayout>
				{services.map((block, index) => (
					<ServiceBlock key={index} {...block} />
				))}
			</GridLayout>
		</SectionWrapper>
	);
}
