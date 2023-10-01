import React from 'react';
import Home from '../pages/Home/Home';
import RouteConfig from './interface';
import renderRoutes from './utils';
import EmptyPageLayout from '../Layouts/EmptyPageLayout';

const routes: RouteConfig[] = [
	{
		title: 'Home',
		path: '/',
		component: <Home />,
		exact: true,
		isPublic: true,
		layout: EmptyPageLayout,
	},
];

export const Routes = renderRoutes(routes);

export default routes;
