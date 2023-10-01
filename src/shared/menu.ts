import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface Page {
	title: string;
	icon: any;
	path: string;
}

export const pages: Page[] = [];

export const settings: Page[] = [
	{ title: 'Profile', icon: AccountCircleIcon, path: '/me' },
	{ title: 'Logout', icon: LogoutIcon, path: '/logout' },
];

export default { pages, settings };
