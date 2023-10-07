import React from 'react';
import { Avatar, Box, Card, CardHeader, CardMedia, IconButton, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';

interface BlogsProps {}

const Blogs: ReactFCC<BlogsProps> = () => {
	return (
		<Paper
			id="blogging"
			sx={{
				p: {
					xs: 5,
					sm: 8,
					md: 10,
				},
				backgroundColor: 'transparent',
				borderRadius: 5,
			}}
			elevation={0}
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
				}}
			>
				B<TypeWhenInView text="logging" once />
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						sm: 'row',
					},
					justifyContent: 'center',
					alignItems: 'stretch',
					gap: 2,
					a: {
						color: '#333',
						transition: 'color 0.3s ease-in-out',
						'&:hover': {
							color: 'primary.main',
						},
					},
				}}
			>
				{[
					{
						title: 'Ravi',
						slug: 'ravi',
						img: 'https://miro.medium.com/v2/resize:fill:176:176/2*9ntqv6lTIvAM1P5rmHEn5Q.jpeg',
						url: 'https://medium.com/@ravikant.gandhi',
					},
					{
						title: '010Pixel',
						slug: '010pixel',
						img: 'https://miro.medium.com/v2/resize:fill:176:176/0*xQi4zw-n7EPAcBcA',
						url: 'https://010pixel.medium.com/',
					},
				].map((item) => (
					<Card
						key={item.slug}
						sx={{
							flex: {
								xs: '0 0 100%',
								sm: '0 0 50%',
							},
							'&:hover': {
								boxShadow:
									'0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
							},
						}}
					>
						<CardHeader
							sx={{
								cursor: 'pointer',
								'.MuiCardHeader-action': {
									transform: 'translateX(0)',
									transition: 'transform 0.3s ease-in-out',
								},
								'&:hover': {
									'.MuiCardHeader-action': {
										transform: 'translateX(3px)',
									},
								},
							}}
							onClick={() => window.open(item.url, '_blank')}
							action={
								<IconButton disableRipple aria-label="visit">
									<ChevronRightIcon />
								</IconButton>
							}
							avatar={
								<Avatar
									sx={{
										backgroundColor: '#fff',
										width: 32,
										height: 32,
									}}
								>
									<CardMedia component="img" image={item.img} loading="lazy" />
								</Avatar>
							}
							title={
								<Typography
									fontWeight={500}
									color="#666"
									sx={{
										fontSize: {
											xs: '0.8rem',
											sm: '1rem',
										},
									}}
								>
									{item.title}
								</Typography>
							}
						/>
					</Card>
				))}
			</Box>
		</Paper>
	);
};

export default Blogs;
