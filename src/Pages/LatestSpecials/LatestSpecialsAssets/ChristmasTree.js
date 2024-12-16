import React from 'react';
import { Box } from '@mui/material';
import myVector from '../../../Assets/SVG/christmasTree.svg';

const ChristmasTree = () => {
	return (
		<Box
			component='img'
			src={myVector}
			alt='My Vector Graphic'
			sx={{
				width: '100%', // Full width of the container
				maxWidth: '150px', // Maximum width
				height: 'auto', // Maintain aspect ratio
				margin: '0 auto', // Centered
				display: 'block',
			}}
		/>
	);
};

export default ChristmasTree;
