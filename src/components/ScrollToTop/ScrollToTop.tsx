import React, { useCallback, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ReactFCC } from '../../interface/react';

interface ScrollToTopProps {}

const ScrollToTop: ReactFCC<ScrollToTopProps> = () => {
	const [showScroll, setShowScroll] = React.useState(false);

	const checkScrollTop = useCallback(() => {
		setShowScroll(window.pageYOffset > 400);
	}, []);

	const scrollUp = useCallback(() => {
		const c = document.documentElement.scrollTop || document.body.scrollTop;

		if (c > 0) {
			window.requestAnimationFrame(scrollUp);
			window.scrollTo(0, c - c / 10);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);

		return () => {
			window.removeEventListener('scroll', checkScrollTop);
		};
	}, [checkScrollTop]);

	return (
		<Fab
			size="small"
			aria-label="scroll to top"
			sx={{
				position: 'fixed',
				bottom: 16,
				right: 16,
				backgroundColor: '#111',
				color: '#fff',
				'&:hover': {
					backgroundColor: '#333',
				},
				opacity: showScroll ? 1 : 0,
				visibility: showScroll ? 'visible' : 'hidden',
				transform: showScroll ? 'scale(1)' : 'scale(0)',
				transition: 'all 0.3s ease-in-out',
			}}
			onClick={scrollUp}
		>
			<KeyboardArrowUpIcon />
		</Fab>
	);
};

export default ScrollToTop;
