import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import CardsSliderItem, { CardItemProps } from './CardsSliderItem';

interface CardsSliderProps {
	items: CardItemProps[];
	moreIcon?: React.ReactNode;
	onMoreClick?: (item: CardItemProps) => void;
	mediaStyle?: any;
}

const CardsSlider: ReactFCC<CardsSliderProps> = (props) => {
	const { items, moreIcon, onMoreClick, mediaStyle } = props;

	return (
		<div data-testid="cards-slider-component">
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
		</div>
	);
};

export default CardsSlider;
