import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ReactFCC } from '../../interface/react';

export interface CardItemProps {
	slug: string;
	name: string;
	logo: string;
	banner: string;
	content?: React.ReactNode;
}

interface CardsSliderItemProps {
	item: CardItemProps;
	moreIcon?: React.ReactNode;
	onMoreClick?: (item: CardItemProps) => void;
}

const CardsSliderItem: ReactFCC<CardsSliderItemProps> = (props) => {
	const { item, moreIcon, onMoreClick } = props;
	return (
		<div data-testid="cards-slider-item-component">
			<Card
				sx={{
					width: {
						xs: 280,
						sm: 300,
						md: 345,
					},
					m: {
						xs: 1,
						sm: 1.5,
						md: 2,
					},
					display: 'block',
				}}
			>
				<CardHeader
					avatar={<Avatar alt={item.name} src={item.logo} />}
					action={
						<IconButton aria-label="more" onClick={() => onMoreClick?.(item)}>
							{moreIcon || <MoreVertIcon />}
						</IconButton>
					}
					title={item.name}
				/>
				{item.banner && (
					<CardMedia
						component="img"
						image={item.banner}
						alt={item.name}
						sx={{
							borderTop: '1px solid #eee',
							borderBottom: '1px solid #eee',
						}}
					/>
				)}
				{item.content && (
					<CardContent>
						<Typography variant="body2" color="text.secondary" component="p">
							{item.content}
						</Typography>
					</CardContent>
				)}
			</Card>
		</div>
	);
};

export default CardsSliderItem;
