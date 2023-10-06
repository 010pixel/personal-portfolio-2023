import React from 'react';
import { ReactFCC } from '../interface/react';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

interface EmptyPageLayoutProps {}

const EmptyPageLayout: ReactFCC<EmptyPageLayoutProps> = ({ children }) => {
	return (
		<main>
			<Header />
			<ScrollToTop />
			{children}
		</main>
	);
};

export default EmptyPageLayout;
