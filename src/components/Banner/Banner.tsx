import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Typewriter } from 'react-simple-typewriter';
import { ReactFCC } from '../../interface/react';

interface BannerProps {}

const Banner: ReactFCC<BannerProps> = () => {
	return (
		<div data-testid="Banner-component">
			<Box
				maxWidth="xl"
				sx={{
					textAlign: 'center',
					borderRadius: 5,
					// backgroundColor: 'rgba(255,255,255,0.3)',
					// border: '1px solid rgba(0,0,0,0.05)',
					px: {
						xs: 2,
						sm: 5,
						md: 10,
					},
					py: {
						xs: 8,
						sm: 9,
						md: 10,
					},
				}}
			>
				<Typography
					variant="h3"
					component="div"
					fontWeight={100}
					sx={{
						fontSize: {
							xs: '1.7rem',
							sm: '2rem',
							md: '3rem',
						},
					}}
				>
					Hi, I'm
				</Typography>
				<Typography
					component="h1"
					fontWeight={900}
					sx={{
						fontSize: {
							xs: '3.2rem',
							sm: '4rem',
							md: '6rem',
						},
					}}
				>
					<Typewriter words={['Ravi Gandhi']} />
				</Typography>
				<Typography
					component="h2"
					gutterBottom
					sx={{
						fontSize: {
							xs: '1.1rem',
							sm: '1.3rem',
							md: '1.7rem',
						},
						fontWeight: 500,
						color: '#333',
						display: 'flex',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
						justifyContent: 'center',
						gap: {
							xs: 0,
							sm: 1,
						},
					}}
				>
					<span>Software Engineer,</span>
					<span>who loves clean code</span>
				</Typography>
				<Typography
					component="p"
					gutterBottom
					sx={{
						fontSize: {
							xs: '0.8rem',
							sm: '1rem',
							md: '1.2rem',
						},
					}}
				>
					React | Vue | Angular | TypeScript | Node | PHP | MySQL | Firebase | Lambda | Serverless | Docker | AWS | GCP
				</Typography>
				<Box
					sx={{
						mt: {
							xs: 2,
							sm: 3,
							md: 4,
						},
						display: 'flex',
						gap: {
							xs: 1,
							sm: 2,
						},
						justifyContent: 'center',
					}}
				>
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
		</div>
	);
};

export default Banner;
