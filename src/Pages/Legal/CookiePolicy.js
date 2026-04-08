import cookiePolicyData from '../../Data/Legal/cookiePolicyData';
import React from 'react';
import LegalPage from './LegalPage';

export default function CookiePolicy() {
	return <LegalPage {...cookiePolicyData} />;
}
