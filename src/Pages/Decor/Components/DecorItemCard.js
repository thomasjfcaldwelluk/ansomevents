import {
	Card,
	CardContent,
	Typography,
	Button,
	CardActions,
	Stack,
	Box,
} from '@mui/material';
import CardDescription from 'Components/ui/Card/CardDescription';
import CardTitle from 'Components/ui/Card/CardTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SectionDivider from 'Components/ui/Divider/SectionDivider';
import CardImage from 'Components/ui/Image/CardImage';
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function DecorItemCard({
	title,
	label,
	image,
	description,
	includes,
	price,
	prices,
	cta,
	imageVariant = 'standard',
}) {
	const [selectedPrice, setSelectedPrice] = useState(prices ? prices[0] : null);
	return (
		<Card variant='primary'>
			{image && <CardImage image={image} />}
			<CardContent
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					padding: 5,
				}}>
				<Typography variant='label'>{label}</Typography>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				{includes && (
					<Stack>
						<SectionDivider variant='gold' />
						<Typography variant='label' sx={{ mb: 1 }}>
							What's Included
						</Typography>
						<Stack
							component='ul'
							sx={{
								listStyle: 'none',
								padding: 0,
								margin: 0,
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: '1fr 1fr',
								},
								gap: 1,
							}}>
							{includes.map((item) => (
								<Stack
									key={item.text}
									component='li'
									direction='row'
									spacing={1}
									alignItems='flex-start'>
									<CheckCircleOutlineIcon
										sx={{ fontSize: 18, mt: '3px', color: 'primary.light' }}
									/>

									<Typography
										variant='body1'
										sx={{
											fontWeight: item.weight === 'bold' ? 700 : 400,
										}}>
										{item.text}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				)}
				<Box sx={{ mt: 'auto' }}>
					<SectionDivider variant='gold' />
					{prices ? (
						<>
							<Select
								fullWidth
								size='small'
								value={selectedPrice?.label}
								onChange={(e) => {
									const selected = prices.find(
										(p) => p.label === e.target.value,
									);
									setSelectedPrice(selected);
								}}
								sx={{ mb: 2 }}>
								{prices.map((option) => (
									<MenuItem key={option.label} value={option.label}>
										{option.label}
									</MenuItem>
								))}
							</Select>
							<Typography
								variant='body2'
								component='p'
								sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
								£{selectedPrice?.price}
							</Typography>
						</>
					) : (
						price && (
							<Typography
								variant='body2'
								component='p'
								sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
								{price.display}
							</Typography>
						)
					)}
					{cta && (
						<CardActions sx={{ justifyContent: 'center', marginBlock: 2 }}>
							<Button variant='secondary'>{cta.label}</Button>
						</CardActions>
					)}
				</Box>
			</CardContent>
		</Card>
	);
}
