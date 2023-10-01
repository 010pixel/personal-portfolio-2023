import React from 'react';
import { ReactFCC } from '../interface/react';

interface ProtectedRouteProps {
	isPublic?: boolean;
}

const ProtectedRoute: ReactFCC<ProtectedRouteProps> = (props) => {
	const { isPublic, children } = props;

	// keeping it on top to avoid showing loading screen for public routes
	if (isPublic) {
		return <div>{children}</div>;
	}

	return <div>{children}</div>;
};

export default ProtectedRoute;
