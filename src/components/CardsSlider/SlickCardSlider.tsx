import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactFCC } from '../../interface/react';
import CardsSliderItem, { CardItemProps } from './CardsSliderItem';
import styles from './slides.module.scss';

interface SlickCardsSliderProps {
	items: CardItemProps[];
	moreIcon?: React.ReactNode;
	onMoreClick?: (item: CardItemProps) => void;
	cardStyle?: any;
	mediaStyle?: any;
	sliderConfig?: any;
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
	const { items, moreIcon, onMoreClick, cardStyle, mediaStyle, sliderConfig } = props;
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

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
			...sliderConfig,
		}),
		[windowWidth, sliderConfig]
	);

	return (
		<div data-testid="slick-cards-slider-component">
			<Slider {...settings}>
				{items.map((item) => (
					<CardsSliderItem
						key={item.slug}
						item={item}
						moreIcon={moreIcon}
						onMoreClick={onMoreClick}
						cardStyle={cardStyle}
						mediaStyle={mediaStyle}
					/>
				))}
			</Slider>
		</div>
	);
};

export default SlickCardsSlider;
