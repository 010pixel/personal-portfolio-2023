import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import CardsSliderItem, { CardItemProps } from './CardsSliderItem';

interface CardsSliderProps {
	title: React.ReactNode;
	items: CardItemProps[];
	moreIcon?: React.ReactNode;
	onMoreClick?: (item: CardItemProps) => void;
	mediaStyle?: any;
}

const CardsSlider: ReactFCC<CardsSliderProps> = (props) => {
	const { title, items, moreIcon, onMoreClick, mediaStyle } = props;
	const photos = ['photo-1524802414218-3983cd08ed53', 'photo-1534996858221-380b92700493'];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	return (
		<div data-testid="cards-slider-component">
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

				<Box
					sx={{
						flex: 1,
						display: 'flex',
						overflow: 'auto',
						'&::-webkit-scrollbar': {
							width: '0.5em',
							height: '0.5em',
						},
						'&::-webkit-scrollbar-track': {
							borderRadius: '8px',
							margin: '8px',
							backgroundColor: 'transparent',
							border: '2px solid #cacaca',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: '#cacaca',
							border: '1px solid #616161',
							borderRadius: '8px',
						},
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							height: 'max-content',
						}}
					>
						{items.map((item) => (
							<CardsSliderItem
								key={item.slug}
								item={item}
								moreIcon={moreIcon}
								onMoreClick={onMoreClick}
								mediaStyle={mediaStyle}
							/>
						))}
					</Box>
				</Box>
			</Paper>
		</div>
	);
};

export default CardsSlider;
