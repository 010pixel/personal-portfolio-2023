import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { ReactFCC } from '../../interface/react';

interface StatsProps {}

const Stats: ReactFCC<StatsProps> = () => {
	const statistics = [
		{
			title: 'Years of experience',
			value: 12,
		},
		{
			title: 'Projects',
			value: 100,
		},
		{
			title: 'Browser Extensions',
			value: 9,
		},
		{
			title: 'WordPress Plugins',
			value: 3,
		},
	];
	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					sm: 'column',
					md: 'row',
				},
				gap: 10,
				justifyContent: 'center',
				textAlign: 'center',
				// alignItems: 'center',
				p: {
					xs: 5,
					sm: 10,
					md: 15,
				},
				backgroundColor: '#fff',
				borderRadius: 5,
				backgroundImage:
					'url(https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				color: '#fff',
				textShadow: '0 0 10px rgba(0,0,0,0.5)',
			}}
			elevation={1}
		>
			{statistics.map((statistic) => (
				<Box key={statistic.title}>
					<Typography variant="h2" component="h3" textAlign="center" fontWeight={400}>
						<CountUp end={statistic.value} enableScrollSpy scrollSpyDelay={500} scrollSpyOnce />+
					</Typography>
					<Typography variant="h5" component="div" sx={{ color: '#fff' }} fontWeight={300}>
						{statistic.title}
					</Typography>
				</Box>
			))}
		</Paper>
	);
};

export default Stats;
