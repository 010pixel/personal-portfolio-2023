import exntensions from '../../shared/data';
import { monthDiff } from './utils';

export const photos = [
	'photo-1628126235206-5260b9ea6441',
	'photo-1590907047706-ee9c08cf3189',
	// 'photo-1528722828814-77b9b83aafb2',
];

const yearsOfExperience = monthDiff(new Date(2011, 11), new Date()) / 12;

export const statistics = [
	{
		title: 'Years of experience',
		value: yearsOfExperience,
		postfix: '+',
	},
	{
		title: 'Projects',
		value: 100,
		postfix: '+',
	},
	{
		title: 'Browser Extensions',
		value: exntensions.length,
		postfix: '',
	},
	{
		title: 'WordPress Plugins',
		value: 3,
		postfix: '',
	},
	{
		title: 'Users',
		value: 50,
		postfix: 'M+',
	},
];
