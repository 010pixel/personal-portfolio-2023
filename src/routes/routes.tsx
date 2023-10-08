import React from 'react';
import Home from '../pages/Home/Home';
import RouteConfig from './interface';
import renderRoutes from './utils';
import EmptyPageLayout from '../Layouts/EmptyPageLayout';
import Projects from '../pages/Projects/Projects';
import AboutMePage from '../pages/AboutMePage/AboutMePage';

const routes: RouteConfig[] = [
	{
		title: 'Home',
		path: '/',
		component: <Home />,
		exact: true,
		isPublic: true,
		layout: EmptyPageLayout,
	},
	{
		title: 'Projects',
		path: '/projects',
		component: <Projects />,
		exact: true,
		isPublic: true,
		layout: EmptyPageLayout,
	},
	{
		title: 'About Me',
		path: '/about-me',
		component: <AboutMePage />,
		exact: true,
		isPublic: true,
		layout: EmptyPageLayout,
	},
];

export const Routes = renderRoutes(routes);

export default routes;
