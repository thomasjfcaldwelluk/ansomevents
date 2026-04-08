import React from 'react';
import LegalPage from './LegalPage';
import termsOfServiceData from '../../Data/Legal/termsOfServiceData';

export default function TermsOfService() {
	return <LegalPage {...termsOfServiceData} />;
}
