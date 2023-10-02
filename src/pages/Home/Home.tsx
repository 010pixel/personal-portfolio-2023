import React, { useEffect } from 'react';
import { Box, Container, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ReactFCC } from '../../interface/react';
import { trackPageView } from '../../common/ga4';
import Stats from '../../components/Stats/Stats';

interface HomeProps {}

const Home: ReactFCC<HomeProps> = () => {
	useEffect(() => {
		trackPageView();
	}, []);
	return (
		<div data-testid="home-component">
			<Container
				maxWidth="xl"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
					gap: {
						xs: 3,
						sm: 8,
						md: 10,
					},
					py: {
						xs: 4,
						sm: 6,
						md: 10,
					},
					// backgroundImage: 'url(https://source.unsplash.com/random/nature)',
					// backgroundSize: 'cover',
					// backgroundPosition: 'center',
					// backgroundRepeat: 'no-repeat',
					// backgroundAttachment: 'fixed',
					// backgroundColor: 'rgba(0,0,0,0.5)',
					// color: '#fff',
				}}
			>
				<Box
					maxWidth="xl"
					sx={{
						textAlign: 'center',
						borderRadius: 5,
						// backgroundColor: 'rgba(255,255,255,0.85)',
						p: {
							xs: 2,
							sm: 5,
							md: 10,
						},
					}}
				>
					<Typography variant="h3" component="div" fontWeight={100}>
						Hi, I'm
					</Typography>
					<Typography variant="h1" component="h1" fontWeight={900}>
						Ravi Gandhi
					</Typography>
					<Typography variant="h5" component="h2" gutterBottom>
						Software Engineer, who loves clean codes
					</Typography>
					<Typography variant="body1" component="p" gutterBottom>
						React | Vue | Angular | Node | PHP | MySQL | Firebase | AWS | GCP
					</Typography>
					<br />
					<Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
						<a href="https://linkedin.com/in/ravigandhi88/" target="_blank" rel="noopener noreferrer">
							<IconButton
								aria-label="LinkedIn"
								color="primary"
								sx={{
									border: '1px solid transparent',
									transition: 'border 0.3s ease-in-out',
									':hover': {
										border: '1px solid',
									},
								}}
							>
								<Tooltip title="LinkedIn" arrow>
									<LinkedInIcon />
								</Tooltip>
							</IconButton>
						</a>
						<a href="https://github.com/010pixel" target="_blank" rel="noopener noreferrer">
							<IconButton
								aria-label="GitHub"
								sx={{
									color: '#333',
									border: '1px solid transparent',
									'&:hover': {
										border: '1px solid',
									},
								}}
							>
								<Tooltip title="GitHub" arrow>
									<GitHubIcon />
								</Tooltip>
							</IconButton>
						</a>
						<a href="https://instagram.com/SoloTraveller.Official" target="_blank" rel="noopener noreferrer">
							<IconButton
								aria-label="Instagram"
								color="error"
								sx={{
									border: '1px solid transparent',
									transition: 'border 0.3s ease-in-out',
									':hover': {
										border: '1px solid',
									},
								}}
							>
								<Tooltip title="Instagram" arrow>
									<InstagramIcon />
								</Tooltip>
							</IconButton>
						</a>
						<a href="https://cv.ravigandhi.com" target="_blank" rel="noopener noreferrer">
							<IconButton
								aria-label="Download Resume"
								color="error"
								sx={{
									border: '1px solid transparent',
									transition: 'border 0.3s ease-in-out',
									':hover': {
										border: '1px solid',
									},
								}}
							>
								<Tooltip title="Download Resume" arrow>
									<PictureAsPdfIcon />
								</Tooltip>
							</IconButton>
						</a>
					</Box>
				</Box>

				<Stats />

				<Paper
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column',
						},
						gap: {
							xs: 1,
							sm: 5,
						},
						justifyContent: 'center',
						alignItems: 'center',
						p: {
							xs: 5,
							sm: 8,
							md: 10,
						},
						backgroundColor: '#fff',
						borderRadius: 5,
					}}
					elevation={1}
				>
					<Typography variant="h3" component="h3" gutterBottom>
						Project Areas
					</Typography>
					<ul>
						<li>Web Applications</li>
						<li>
							Browser Extensions <small>(Google Chrome, Mozilla Firefox, Microsoft Edge)</small>
						</li>
						<li>WordPress Plugins</li>
						<li>
							Cloud Computing <small>(AWS, GCP)</small>
						</li>
						<li>
							Artificial Intelligence <small>(experimenting)</small>
						</li>
					</ul>
				</Paper>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column',
						},
						gap: {
							xs: 1,
							sm: 5,
						},
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						p: {
							xs: 5,
							sm: 8,
							md: 10,
						},
						backgroundColor: '#fff',
						borderRadius: 5,
					}}
					elevation={1}
				>
					<Typography variant="h3" component="h3" gutterBottom>
						Blogging
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
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
						<a href="https://medium.com/@ravikant.gandhi" target="_blank" rel="noopener noreferrer">
							Ravi
						</a>
						<a href="https://010pixel.medium.com/" target="_blank" rel="noopener noreferrer">
							010Pixel
						</a>
					</Box>
				</Paper>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column',
						},
						gap: {
							xs: 1,
							sm: 5,
						},
						justifyContent: 'center',
						alignItems: 'center',
						p: {
							xs: 5,
							sm: 8,
							md: 10,
						},
						backgroundColor: '#fff',
						borderRadius: 5,
					}}
				>
					<Typography variant="h2" component="h3" gutterBottom>
						About Me
					</Typography>
					<Typography variant="body1" component="p" gutterBottom>
						Experienced in <b>FinTech startups</b>, Financial Institution, <b>Media</b> Network, <b>Newsroom</b>,
						<b>Education</b> Institution and small service based companies with <b>cross-country</b>,{' '}
						<b>cross-culture</b>, <b>cross-functional</b> collaboration.
					</Typography>
					<Typography variant="body1" component="p" gutterBottom>
						I like to build stuff to <b>solve</b> real world problems and make people's life easier by making things
						more <b>accessible</b> and <b>efficient</b>.
						<br />
						<br />I have been working in the software industry for over I have worked on various projects and
						technologies including both frontend and backend.
						<br />
						<br />
						I like to build softwares and make it available to public to free. This is my way of contributing to the
						world of free software so that the next generation can still get free softwares.
						<br />
						<br />
						In my free time, I like to travel, read books, watch movies, play games, and learn new things.
						<br />
						<br />
						Coding is like mediation for me.
					</Typography>
				</Paper>
			</Container>
		</div>
	);
};

export default Home;
