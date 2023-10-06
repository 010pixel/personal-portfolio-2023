import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import { wordpressPlugins, WordPressPlugin } from '../../shared/data';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';
import SlickCardsSlider from '../CardsSlider/SlickCardSlider';

interface WordPressPluginsProps {}

const WordPressPlugins: ReactFCC<WordPressPluginsProps> = () => {
	const photos = [
		// 'photo-1510906594845-bc082582c8cc',
		'photo-1519337265831-281ec6cc8514',
	];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	return (
		<Box id="wordpress-plugins" data-testid="wordpress-plugins-component">
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
					// borderRadius: 0,
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
					}}
				>
					W<TypeWhenInView text="ordPress Plugins" once />
				</Typography>
				<SlickCardsSlider
					items={wordpressPlugins.map((wpPlugin: WordPressPlugin) => {
						return {
							slug: wpPlugin.slug,
							name: wpPlugin.title,
							logo: `/assets/images/wordpress/${wpPlugin.slug}/logo.svg`,
							banner: `/assets/images/wordpress/${wpPlugin.slug}/banner.png`,
							content: wpPlugin.description,
							links: [wpPlugin.link],
						};
					})}
					moreIcon={<ChevronRightIcon />}
					onMoreClick={(plugin: any) => {
						window.open(plugin.links[0], '_blank');
					}}
					cardStyle={{
						width: {
							// xs: 280,
							sm: 300,
							md: 540,
						},
					}}
				/>
			</Paper>
		</Box>
	);
};

export default WordPressPlugins;
