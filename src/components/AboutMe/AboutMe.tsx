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
						<b>Education</b> Institution and small service based companies, I've been fortunate to collaborate across
						<b>countries</b>, <b>cultures</b>, and <b>functions</b>.
					</p>
					<p>
						My journey in the software industry spans over a decade, involving diverse projects and technologies, both
						on the frontend and backend.
					</p>
					<p>
						Creating things that <b>solve</b> real <b>problems</b> and make life easier for <b>people</b> is something I
						enjoy. It's about making things more <b>accessible</b> and <b>efficient</b> for everyone.
					</p>
					<p>
						In my free time, I develop softwares and offer it to the public free. This is my way of contributing to the
						world of free software so that the next generation can still access free software.
					</p>
					<p>
						Coding serves as a form of meditation for me, allowing me to find peace and creativity in the digital realm.
					</p>
					<p>
						Beyond coding, I also like to travel, watch movies, play outdoor sports, do some martial arts, and learn new
						things.
					</p>
				</Typography>
			</Box>
		</Paper>
	);
};

export default AboutMe;
