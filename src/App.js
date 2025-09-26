// import './App.css';
import Home from './Pages/Home/Home';
import Packages from './Pages/WhatWeOffer/Packages';
import XmasDisplays from './Pages/WhatWeOffer/XmasDisplays';
import AnsomAndEasy from './Pages/WhatWeOffer/AnsomAndEasy';
import DesignPrintServices from './Pages/WhatWeOffer/DesignPrintServices';
import FullEventService from './Pages/WhatWeOffer/FullEventService';
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
import ScrollToTop from './ReuseableComponents/ScrollToTop';

const AnalyticsWrapper = ({ children }) => {
	useAnalytics(); // Call the analytics hook
	return <>{children}</>;
};

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<AnalyticsWrapper>
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/whatweoffer/packages' element={<Packages />} />
						<Route
							path='/whatweoffer/design_print_services'
							element={<DesignPrintServices />}
						/>
						<Route
							path='/whatweoffer/full_event_service'
							element={<FullEventService />}
						/>
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
						<Route
							path='/whatweoffer/ansom_and_easy'
							element={<AnsomAndEasy />}
						/>
						<Route path='/services' element={<Services />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/events' element={<Events />} />
						<Route path='/faqs' element={<FrequentlyAskedQuestions />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/aboutus' element={<About />} />
						<Route
							path='/whatweoffer/xmasdisplays'
							element={<XmasDisplays />}
						/>

						<Route
							path='/termsandconditions'
							element={<TermsAndConditions />}
						/>
					</Routes>
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
					<Footer />
				</AnalyticsWrapper>
			</Router>
		</div>
	);
}

export default App;
