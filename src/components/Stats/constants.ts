import { exntensions, gpts, wordpressPlugins } from '../../shared/data';
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
		slug: '',
	},
	{
		title: 'Projects',
		value: 100,
		postfix: '+',
		slug: '',
	},
	{
		title: 'Browser Extensions',
		value: exntensions.length,
		postfix: '',
		slug: 'browser-extensions',
	},
	{
		title: 'WordPress Plugins',
		value: wordpressPlugins.length,
		postfix: '',
		slug: 'wordpress-plugins',
	},
	{
		title: 'GPTs',
		value: gpts.length,
		postfix: '',
		slug: 'gpts',
	},
	{
		title: 'Users',
		value: 50,
		postfix: 'M+',
		slug: '',
	},
];
