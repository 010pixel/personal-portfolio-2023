import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import { trackPageView } from '../../common/ga4';
import BrowserExtensions from '../../components/BrowserExtensions/BrowserExtensions';
import WordPressPlugins from '../../components/WordPressPlugins/WordPressPlugins';
import Blogs from '../../components/Blogs/Blogs';

interface ProjectsProps {}

const Projects: ReactFCC<ProjectsProps> = () => {
	useEffect(() => {
		trackPageView();
	}, []);
	return (
		<div data-testid="projects-component">
			<Container
				maxWidth="xl"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
					gap: {
						xs: 5,
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
				<BrowserExtensions />

				<Blogs />

				<WordPressPlugins />
			</Container>
		</div>
	);
};

export default Projects;
