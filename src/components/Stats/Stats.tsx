import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { ReactFCC } from '../../interface/react';

interface StatsProps {}

const Stats: ReactFCC<StatsProps> = () => {
	const statistics = [
		{
			title: 'Years of experience',
			value: 12,
			postfix: '+',
		},
		{
			title: 'Projects',
			value: 100,
			postfix: '+',
		},
		{
			title: 'Browser Extensions',
			value: 9,
			postfix: '',
		},
		{
			title: 'WordPress Plugins',
			value: 3,
			postfix: '',
		},
		{
			title: 'Users',
			value: 30,
			postfix: 'M+',
		},
	];
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
				backgroundImage:
					'url(https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80)',
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
			elevation={1}
		>
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
