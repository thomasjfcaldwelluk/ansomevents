import React, { Suspense, lazy } from 'react';
import Footer from './Components/Layout/Footer/Footer';
import NavBar from './Components/Layout/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAnalytics from './Hooks/useAnalytics';
import ScrollToTop from './Utils/ScrollToTop';
import ScrollToHash from 'Utils/StrollToHash';
import CookieConsent from 'react-cookie-consent';

const Home = lazy(() => import('./Pages/Home/Home'));
const Wedding = lazy(() => import('./Pages/Weddings/Weddings'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const About = lazy(() => import('./Pages/AboutUs/About'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'));
const Decor = lazy(() => import('./Pages/Decor/Decor'));
const Corporate = lazy(() => import('./Pages/Corporate/Corporate'));
const FrequentlyAskedQuestions = lazy(
	() => import('./Pages/FAQS/FrequentlyAskedQuestions'),
);
const CookiePolicy = lazy(() => import('./Pages/Legal/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./Pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./Pages/Legal/TermsOfService'));

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
					<Suspense fallback={<div>Loading...</div>}>
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
							<Route
								path='/terms-of-service'
								element={<TermsOfService />}
							/>{' '}
							{/* Catch-all route for 404 */}{' '}
							<Route path='*' element={<Home />} />
						</Routes>
					</Suspense>
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
