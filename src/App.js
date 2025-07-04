// import './App.css';
import Home from './Pages/Home/Home';
import Packages from './Pages/WhatWeOffer/Packages';
import Services from './Pages/Services/Services';
import Props from './Pages/WhatWeOffer/Props';
import SpecialOffers from './Pages/WhatWeOffer/SpecialOffers/SpecialOffers';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';
import Backdrops from './Pages/WhatWeOffer/Backdrops';
import BalloonDisplays from './Pages/WhatWeOffer/BalloonDisplays';
import TermsAndConditions from './Pages/TermsConditions/TermsAndConditions';
import FrequentlyAskedQuestions from './Pages/FAQS/FrequentlyAskedQuestions';
import Events from './Pages/Events/Events';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAnalytics from './useAnalytics';
import CookieConsent from 'react-cookie-consent';
import { Box } from '@mui/material';

const AnalyticsWrapper = ({ children }) => {
	useAnalytics(); // Call the analytics hook
	return <>{children}</>;
};

function App() {
	return (
		<div className='App'>
			<Router>
				<AnalyticsWrapper>
					<NavBar />
					<Box component={'body'}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/whatweoffer/packages' element={<Packages />} />
							<Route
								path='/whatweoffer/balloondisplays'
								element={<BalloonDisplays />}
							/>
							<Route path='/whatweoffer/prophire' element={<Props />} />
							<Route path='/whatweoffer/backdrops' element={<Backdrops />} />
							<Route
								path='/whatweoffer/specialoffers'
								element={<SpecialOffers />}
							/>
							<Route path='/services' element={<Services />} />
							<Route path='/gallery' element={<Gallery />} />
							<Route path='/events' element={<Events />} />
							<Route path='/faqs' element={<FrequentlyAskedQuestions />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/aboutus' element={<About />} />

							<Route
								path='/termsandconditions'
								element={<TermsAndConditions />}
							/>
						</Routes>
						<Footer />
						<CookieConsent
							location='bottom'
							buttonText='Accept'
							cookieName='cookieConsent'
							style={{ background: '#2B373B', color: '#FFFFFF' }}
							buttonStyle={{ color: '#2B373B', fontSize: '13px' }}
							expires={150}
							onAccept={() => {
								console.log('Cookies accepted');
							}}>
							This website uses cookies to enhance the user experience.{' '}
							<span style={{ fontSize: '10px' }}>
								You can change your cookie settings at any time.
							</span>
						</CookieConsent>
					</Box>
				</AnalyticsWrapper>
			</Router>
		</div>
	);
}

export default App;
