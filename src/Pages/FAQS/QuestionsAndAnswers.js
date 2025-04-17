import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import theme from '../../theme';

const faq = [
	{
		question: 'How long will my balloon decorations last??',
		answer:
			'Its hard to give an exact answer on how long balloon decorations will last since many factors come into play. Outdoor setups generally last just a day, while indoor installations fare better, but conditions like temperature, foot traffic, and the environment can impact longevity. For example, hot weather or placing balloons in areas with fluctuating temperatures or high foot traffic can shorten their lifespan.We use high-quality balloons that are more durable and hold their shape longer than cheaper alternatives, but due to external factors, we cannot guarantee how long a display will last',
	},
	{
		question: 'Will you remove the installation after our event?',
		answer:
			'If our team is scheduled to dismantle your balloon décor, this will be reflected on your invoice. For installations involving props, stands, or frameworks, we will return at the agreed date and time to disassemble and collect our equipment.Please note that all equipment provided to support your décor remains the property of Ansom Events and must be returned in the condition it was received. Failure to do so may result in additional charges as outlined in your invoice.',
	},
	{
		question: 'How far in advance do I need to book?',
		answer:
			'Our designs and installations are fully customized to reflect your chosen color scheme and theme, ensuring a unique and personalized result. To allow sufficient time for the creative process, we recommend booking several weeks in advance. Full payment is required two weeks prior to the event date.',
	},
	{
		question: 'Can I collect my balloon or decor?',
		answer:
			'Due to the nature of our work, which often involves on-site setups and décor deliveries for clients, we do not operate a retail outlet and are not open to the public.',
	},
	{
		question: 'Can I put decor anywhere?',
		answer:
			'Balloons and many décor items perform better indoors, but outdoor setups are possible under favorable weather conditions or for shorter durations. To ensure the best results, we kindly ask that you provide a photo of the desired installation location. This allows us to assess the space, determine the appropriate size, and evaluate whether a framework is necessary to support the décor.',
	},
	{
		question: 'How long does it take to setup an installation? ',
		answer:
			'The setup time required will vary depending on the complexity of your desired décor. We typically ask for a minimum of a two-hour setup window. For larger installations, some elements will be prepared in advance, with final touches completed on-site. In some cases, extensive setups may require a day or more, and we will confirm the exact time frame with your quote.Please note that unless you have engaged our event planning service, it is your responsibility to coordinate with the venue to ensure we have access at the agreed time for setup. Any delay in access may impact the final appearance of your display.',
	},
	{
		question: 'Do you do balloon releases?',
		answer:
			'No, in consideration of environmental sustainability, we do not facilitate balloon release events.',
	},
	{
		question: 'What form of payment do you accept?',
		answer:
			'We accept payment via Bank Transfer, Stripe, or PayPal. Please note that PayPal incurs a 3.5% processing fee and Stripe a 1.5% fee, which will be added to your invoice total. We do not accept cash payments.',
	},
	{
		question: 'How do I secure the decor and my desired event date?',
		answer:
			'Once you approve the details of your quote, we will issue an invoice requiring your signature and a 50% deposit. Your order will be confirmed upon receipt of the signed invoice and deposit. The remaining balance is due two weeks prior to the event date.',
	},
	{
		question: 'Do you do charity events?',
		answer:
			'As a company in the party industry, we frequently receive requests to provide complimentary support for charity events. While we have supported various local causes in the past, the increasing volume of requests has made it challenging to continue this practice. Therefore, we have decided to focus our efforts on supporting causes that hold special significance for us.',
	},
	{
		question: 'Do you do helium balloons?',
		answer:
			'We specialize in air-filled balloon art and non-helium gas decor. While some of our decor setups may require helium gas, please note that inhaling helium can pose serious health risks, including asphyxiation. We advise against inhaling helium for safety reasons.',
	},
];

function QuestionAndAnswers() {
	return (
		<Box component='section' aria-label='Questions And Answers for FAQs'>
			<Box
				sx={{
					backgroundColor: theme.palette.primaryBackground.secondary,
					marginBlock: 2,
					padding: 1,
				}}>
				<Typography component={'p'} variant='titleText'>
					Safety Warning for Balloons:
				</Typography>
				<Typography component={'p'} variant='p'>
					Balloons pose a choking hazard and should always be used under adult
					supervision. Please note that latex balloons are made from natural
					rubber latex, which may cause allergic reactions in some individuals.
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{faq.map((qa, index) => (
					<Box key={index}>
						{/* Question */}
						<Grid item size={{ xs: 12 }}>
							<Typography component={'p'} variant='titleText'>
								{index + 1}. {qa.question}
							</Typography>
						</Grid>
						{/* Answer */}
						<Grid item size={{ xs: 12 }}>
							<Typography component={'p'} variant='smallerP'>
								{qa.answer}
							</Typography>
						</Grid>
					</Box>
				))}
			</Grid>
		</Box>
	);
}

export default QuestionAndAnswers;
