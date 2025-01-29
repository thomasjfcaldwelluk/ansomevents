import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import QuestionAndAnswers from '../QuestionsAndAnswers';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import theme from '../../../theme';
import SectionHeader from '../../../ReuseableComponents/SectionHeader';

const faqStyles = {
	faqContainer: {
		backgroundColor: theme.palette.primaryBlue.main,
		padding: 5,
	},
	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	iconContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
	},
	icon: {
		fontSize: { xs: 105, md: 150 },
		color: theme.palette.whiteText.main,
	},
	contentButton: {
		backgroundColor: theme.palette.whiteText.main,
		color: theme.palette.darkBlack.main,
	},
	textContainer: {
		width: { xs: '90%', md: '75%' },
		marginBlock: '1rem',
		color: theme.palette.whiteText.main,
	},
};

export default function FrequentlyAskedQuestions() {
	const [open, setOpen] = useState(false);
	// Handle modal open/close
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<Box component={'section'} className='Ansom_Events_FAQS'>
			<Grid container sx={{ ...faqStyles.faqContainer }}>
				<SectionHeader
					sectionHeader='Have a Question?'
					sectionSubheader='Read Our FAQs'
				/>
				<Grid item size={{ xs: 12 }} sx={{ ...faqStyles.contentContainer }}>
					<Grid
						item
						container
						spacing={4}
						size={{ xs: 12 }}
						sx={{ ...faqStyles.iconContainer }}>
						<Box item>
							<QuestionAnswerIcon sx={{ ...faqStyles.icon }} />
						</Box>
						<Box item>
							<Button
								variant='contained'
								sx={{ ...faqStyles.contentButton }}
								onClick={handleOpen}>
								Read FAQs
							</Button>
						</Box>
					</Grid>
					<Box item size={{ xs: 6 }} sx={{ ...faqStyles.textContainer }}>
						<Typography variant='body2' component='p'>
							Explore our FAQs for quick answers to common questions. If you
							don’t find what you’re looking for, feel free to contact us—we’re
							here to help and provide personalized support!
						</Typography>
					</Box>
					<Dialog
						open={open}
						onClose={handleClose} // Closes the modal when clicking outside or pressing ESC
						scroll='paper' // Or use scroll="body" based on preference
						maxWidth='md'
						fullWidth
						aria-labelledby='modal-title'
						aria-describedby='modal-description'>
						{/* Modal content */}
						<DialogTitle id='modal-title' variant='h6' component='h2'>
							Frequently Asked Questions (FAQ)
						</DialogTitle>
						<DialogContent>
							<QuestionAndAnswers />
						</DialogContent>

						{/* Button to close the modal */}
						<DialogActions>
							<Button
								onClick={handleClose}
								sx={{ mt: 2, cursor: 'pointer' }}
								variant='outlined'
								color='secondary'>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</Grid>
			</Grid>
		</Box>
	);
}
