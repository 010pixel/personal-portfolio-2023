import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import { gpts, GPTs } from '../../shared/data';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';
import SlickCardsSlider from '../CardsSlider/SlickCardSlider';

interface GptsProps {}

const Gpts: ReactFCC<GptsProps> = () => {
	const photos = ['photo-1592659762303-90081d34b277'];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	return (
		<Box
			id="gpts"
			data-testid="gpts-component"
			sx={{
				mx: {
					xs: -2,
					sm: -3,
					md: -3,
				},
			}}
		>
			<Paper
				sx={{
					py: {
						xs: 6,
						sm: 8,
						md: 10,
					},
					backgroundImage: `url(https://images.unsplash.com/${randomPhoto}?auto=format&fit=crop&w=1400&q=80)`,
					backgroundSize: 'cover',
					backgroundPosition: 'center bottom',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: {
						xs: 'scroll',
						sm: 'fixed',
						md: 'fixed',
					},
					borderRadius: 0,
				}}
				elevation={1}
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
						textShadow: '1px 1px 5px #000',
					}}
				>
					G<TypeWhenInView text="PTs (OpenAI)" once />
				</Typography>
				<SlickCardsSlider
					items={gpts.map((gpt: GPTs) => {
						return {
							slug: gpt.slug,
							name: gpt.name,
							logo: `/assets/images/gpts/${gpt.slug}.png`,
							banner: `/assets/images/gpts/${gpt.slug}.png`,
							content: gpt.description || gpt.link,
							links: [gpt.link],
						};
					})}
					moreIcon={<ChevronRightIcon />}
					onMoreClick={(item: any) => {
						window.open(item.links[0], '_blank');
					}}
				/>
			</Paper>
		</Box>
	);
};

export default Gpts;
