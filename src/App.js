import Footer from './Components/Layout/Footer/Footer';
import NavBar from './Components/Layout/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAnalytics from './Hooks/useAnalytics';
import CookieConsent from 'react-cookie-consent';
import ScrollToTop from './Utils/ScrollToTop';
import ScrollToHash from 'Utils/StrollToHash';
import Home from './Pages/Home/Home';
import Wedding from './Pages/Weddings/Weddings';
import Contact from './Pages/Contact/Contact';
import About from './Pages/AboutUs/About';
import Services from './Pages/Services/Services';
import Gallery from './Pages/Gallery/Gallery';
import Decor from './Pages/Decor/Decor';
import Corporate from './Pages/Corporate/Corporate';
import FrequentlyAskedQuestions from './Pages/FAQS/FrequentlyAskedQuestions';
import CookiePolicy from './Pages/Legal/CookiePolicy';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import TermsOfService from './Pages/Legal/TermsOfService';
import 'leaflet/dist/leaflet.css';

const AnalyticsWrapper = ({ children }) => {
	useAnalytics(); // Call the analytics hook
	return <>{children}</>;
};
function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<ScrollToHash />
				<AnalyticsWrapper>
					<NavBar />
					<Routes>
						{/* Top level nav routes */}
						<Route path='/' element={<Home />} />
						<Route path='/love-celebrations' element={<Wedding />} />
						<Route path='/contact-us' element={<Contact />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/decor' element={<Decor />} />
						<Route path='/corporate' element={<Corporate />} />
						<Route path='/services' element={<Services />} />
						{/* Bottom level nav routes */}
						<Route path='/about-us' element={<About />} />
						<Route path='/faqs' element={<FrequentlyAskedQuestions />} />
						{/* Legal pages */}
						<Route path='/cookie-policy' element={<CookiePolicy />} />
						<Route path='/privacy-policy' element={<PrivacyPolicy />} />
						<Route path='/terms-of-service' element={<TermsOfService />} />{' '}
						{/* Catch-all route for 404 */}{' '}
						<Route path='*' element={<Home />} />
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
