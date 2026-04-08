import React from 'react';
import privacyPolicyData from '../../Data/Legal/privacyPolicyData';
import LegalPage from './LegalPage';

export default function PrivacyPolicy() {
	return <LegalPage {...privacyPolicyData} />;
}
