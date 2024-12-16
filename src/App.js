import './App.css';
import Home from '../src/Pages/Home/Components/Home';
import DecorPackages from './Pages/DecorPackages/DecorPackages';
import AllServices from './Pages/Services/AllServices';
import LatestSpecials from './Pages/LatestSpecials/LatestSpecials';
import ContactPage from './Pages/ContactPage/ContactPage';
import Footer from './Footer';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useAnalytics from './useAnalytics';
import CookieConsent from 'react-cookie-consent';

const AnalyticsWrapper = ({ children }) => {
	useAnalytics(); // Call the analytics hook
	return <>{children}</>;
};

function App() {
	return (
		<div className='App'>
			<Router>
				<AnalyticsWrapper>
					<div>
						<NavBar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/services' element={<AllServices />} />
							<Route path='/decorpackages' element={<DecorPackages />} />
							<Route path='/latestspecials' element={<LatestSpecials />} />
							<Route path='/contact' element={<ContactPage />} />
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
					</div>
				</AnalyticsWrapper>
			</Router>
		</div>
	);
}

export default App;
