import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { ReactFCC } from '../../interface/react';
import exntensions from '../../shared/data';

interface StatsProps {}

function monthDiff(d1: any, d2: any) {
	let months;
	months = (d2.getFullYear() - d1.getFullYear()) * 12;
	months -= d1.getMonth();
	months += d2.getMonth();
	return months <= 0 ? 0 : months;
}
const yearsOfExperience = monthDiff(new Date(2011, 11), new Date()) / 12;

const Stats: ReactFCC<StatsProps> = () => {
	const statistics = [
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

	const photos = [
		'photo-1628126235206-5260b9ea6441',
		'photo-1590907047706-ee9c08cf3189',
		'photo-1528722828814-77b9b83aafb2',
	];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	return (
		<Paper
			sx={{
				py: {
					xs: 5,
					sm: 10,
					md: 15,
				},
				backgroundColor: '#fff',
				borderRadius: 5,
				backgroundImage: `url(https://images.unsplash.com/${randomPhoto}?auto=format&fit=crop&w=1800&q=80)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: {
					xs: 'scroll',
					sm: 'fixed',
					md: 'fixed',
				},
			}}
			elevation={1}
		>
			<Typography
				variant="h4"
				component="h2"
				fontWeight={300}
				mb={{
					xs: 4,
					sm: 6,
					md: 8,
				}}
				sx={{
					textAlign: 'center',
					color: '#fff',
				}}
			>
				By the Numbers
			</Typography>
			<Grid
				container
				maxWidth="xl"
				spacing={0}
				sx={{
					gap: 5,
					justifyContent: 'center',
					mx: 'auto',
					textAlign: 'center',
				}}
			>
				{statistics.map((statistic) => (
					<Grid item xs={12} sm={4} md={3}>
						<Box
							key={statistic.title}
							sx={{
								backgroundColor: 'rgba(0,0,0,0.05)',
								borderRadius: 5,
								border: '1px solid rgba(255,255,255,0.1)',
								height: '100%',
								py: 4,
								mx: 2,
								textShadow: '0 0 10px rgba(0,0,0,0.5)',
								color: '#fff',
								justifyContent: 'center',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant="h2" component="h3" fontWeight={400}>
								<CountUp end={statistic.value} enableScrollSpy scrollSpyDelay={500} scrollSpyOnce />
								{statistic.postfix}
							</Typography>
							<Typography variant="h5" component="div" fontWeight={300}>
								{statistic.title}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default Stats;
