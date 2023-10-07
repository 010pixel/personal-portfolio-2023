import React from 'react';
import { Avatar, Box, CardMedia, Paper, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';

interface AboutMeProps {}

const AboutMe: ReactFCC<AboutMeProps> = () => {
	return (
		<Paper
			id="about-me"
			sx={{
				p: {
					xs: 5,
					sm: 8,
					md: 10,
				},
				backgroundColor: '#fff',
				borderRadius: 5,
			}}
			elevation={0}
		>
			<Avatar
				sx={{
					backgroundColor: '#fff',
					width: 64,
					height: 64,
					m: '0 auto',
				}}
			>
				<CardMedia
					component="img"
					image="https://miro.medium.com/v2/resize:fill:176:176/2*9ntqv6lTIvAM1P5rmHEn5Q.jpeg"
					loading="lazy"
				/>
			</Avatar>
			<Typography
				variant="h4"
				component="h2"
				fontWeight={300}
				mt={2}
				mb={{
					xs: 2,
					sm: 4,
					md: 4,
				}}
				sx={{
					textAlign: 'center',
				}}
			>
				A<TypeWhenInView text="bout me" once />
			</Typography>
			<Box>
				<Typography
					variant="body1"
					component="div"
					gutterBottom
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<p>
						Experienced in <b>FinTech startups</b>, Financial Institution, <b>Media</b> Network, <b>Newsroom</b>,
						<b>Education</b> Institution and small service based companies with <b>cross-country</b>,{' '}
						<b>cross-culture</b>, <b>cross-functional</b> collaboration.
					</p>
					<p>
						I like to build stuff to <b>solve</b> real world problems and make people's life easier by making things
						more <b>accessible</b> and <b>efficient</b>.
					</p>
					<p>
						I have been working in the software industry for over a decade. I have worked on various projects and
						technologies including both frontend and backend.
					</p>
					<p>
						I like to build softwares and make it available to public to free. This is my way of contributing to the
						world of free software so that the next generation can still get free softwares.
					</p>
					<p>In my free time, I like to travel, watch movies, play games, and learn new things and of course code.</p>
					<p>Coding is a kind of meditation for me.</p>
				</Typography>
			</Box>
		</Paper>
	);
};

export default AboutMe;
