import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import { pages } from '../../shared/menu';

interface HeaderProps {}

const Header: ReactFCC<HeaderProps> = () => {
	const navigate = useNavigate();

	const gotoPage = (path: string) => {
		navigate(path);
	};

	return (
		<Container sx={{ p: 2 }}>
			<AppBar
				position="sticky"
				sx={{
					borderRadius: 2,
					backgroundColor: '#111',
				}}
				elevation={0}
			>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<Button sx={{ ml: -1, color: 'white', display: 'block' }} onClick={() => gotoPage('/')}>
							<Typography variant="inherit" color="inherit" noWrap>
								Ravi
							</Typography>
						</Button>
					</Box>
					<Box sx={{ flexGrow: 0, display: 'flex' }}>
						<Button
							size="small"
							sx={{
								color: 'white',
								textTransform: 'none',
							}}
							onClick={() => {
								window.open('https://cv.ravigandhi.com', '_blank');
							}}
						>
							Download CV
						</Button>
						{pages.map((page) => (
							<Button
								key={page.title}
								size="small"
								sx={{ my: 0, ml: 1, color: 'white' }}
								onClick={() => gotoPage(page.path)}
								variant="outlined"
							>
								{page.title}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default Header;
