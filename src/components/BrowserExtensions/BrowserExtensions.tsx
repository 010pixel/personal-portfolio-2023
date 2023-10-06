import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import exntensions, { BrowserExtension, ExtensionLink } from '../../shared/data';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';
import SlickCardsSlider from '../CardsSlider/SlickCardSlider';

interface BrowserExtensionsProps {}

const BrowserExtensions: ReactFCC<BrowserExtensionsProps> = () => {
	const photos = [
		// 'photo-1510906594845-bc082582c8cc',
		'photo-1585830812756-896e704c7861',
	];

	const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

	return (
		<Box
			data-testid="browser-extensions-component"
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
					}}
				>
					B<TypeWhenInView text="rowser Extensions" once />
				</Typography>
				<SlickCardsSlider
					items={exntensions.map((extension: BrowserExtension) => {
						return {
							slug: extension.slug,
							name: extension.name,
							logo: `/assets/images/browser-extensions/${extension.slug}/icon48.png`,
							banner: `/assets/images/browser-extensions/${extension.slug}/marquee.png`,
							content: extension.description || extension.links.map((link: ExtensionLink) => link.browser).join(', '),
							links: extension.links,
						};
					})}
					moreIcon={<ChevronRightIcon />}
					onMoreClick={(extension: any) => {
						window.open(`https://browser.010pixel.com/item/${extension.slug}/`, '_blank');
					}}
					mediaStyle={{
						height: {
							xs: 114,
							sm: 122,
							md: 140,
						},
					}}
				/>
			</Paper>
		</Box>
	);
};

export default BrowserExtensions;
