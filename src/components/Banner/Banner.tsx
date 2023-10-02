import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
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
					Software Engineer, who loves clean code
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
		</div>
	);
};

export default Banner;
