import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
	const location = useLocation();

	useEffect(() => {
		if (window.gtag) {
			window.gtag('config', 'YOUR_TRACKING_ID', {
				page_path: location.pathname,
			});
		}
	}, [location]);
};

export default useAnalytics;
