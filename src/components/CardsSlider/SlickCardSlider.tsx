import React, { useEffect, useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactFCC } from '../../interface/react';
import CardsSliderItem, { CardItemProps } from './CardsSliderItem';
import styles from './slides.module.scss';

interface SlickCardsSliderProps {
	title: React.ReactNode;
	items: CardItemProps[];
	moreIcon?: React.ReactNode;
	onMoreClick?: (item: CardItemProps) => void;
	mediaStyle?: any;
}

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<Box
			className={`${className} ${styles.slickPrev}`}
			style={{
				...style,
				display: 'flex',
				background: 'rgba(255, 255, 255, 0.2)',
				width: '56px',
				height: '56px',
				marginRight: '32px',
				zIndex: 1,
				'&:before': {
					fontSize: '48px',
					color: '#fff',
					content: '"chevron_right"',
				},
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<Box
			className={`${className} ${styles.slickNext}`}
			style={{
				...style,
				display: 'block',
				background: 'rgba(255, 255, 255, 0.2)',
				width: '56px',
				height: '56px',
				marginLeft: '32px',
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
}

const SlickCardsSlider: ReactFCC<SlickCardsSliderProps> = (props) => {
	const { title, items, moreIcon, onMoreClick, mediaStyle } = props;
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	const photos = ['photo-1524802414218-3983cd08ed53', 'photo-1534996858221-380b92700493'];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const settings = useMemo(
		() => ({
			dots: false,
			centerMode: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: windowWidth >= 600,
			pauseOnHover: true,
			swipeToSlide: true,
			useTransform: false,
			cssEase: 'linear',
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}),
		[windowWidth]
	);

	return (
		<div data-testid="slick-cards-slider-component">
			<Paper
				sx={{
					py: {
						xs: 6,
						sm: 8,
						md: 10,
					},
					backgroundImage: `url(https://images.unsplash.com/${randomPhoto}?auto=format&fit=crop&w=1800&q=80)`,
					backgroundSize: 'cover',
					backgroundPosition: 'center bottom',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: {
						xs: 'scroll',
						sm: 'fixed',
						md: 'fixed',
					},
				}}
				elevation={5}
			>
				<Typography
					variant="h4"
					component="h2"
					fontWeight={300}
					sx={{
						mb: {
							xs: 4,
							sm: 6,
							md: 8,
						},
						color: '#fff',
						textAlign: 'center',
					}}
				>
					{title}
				</Typography>
				<Box>
					<Slider {...settings}>
						{items.map((item) => (
							<CardsSliderItem
								key={item.slug}
								item={item}
								moreIcon={moreIcon}
								onMoreClick={onMoreClick}
								mediaStyle={mediaStyle}
							/>
						))}
					</Slider>
				</Box>
			</Paper>
		</div>
	);
};

export default SlickCardsSlider;
