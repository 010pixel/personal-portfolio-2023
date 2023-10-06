import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import exntensions, { BrowserExtension, ExtensionLink } from '../../shared/data';
import TypeWhenInView from '../TypeWhenInView/TypeWhenInView';
import SlickCardsSlider from '../CardsSlider/SlickCardSlider';

interface BrowserExtensionsProps {}

const BrowserExtensions: ReactFCC<BrowserExtensionsProps> = () => {
	return (
		<div data-testid="browser-extensions-component">
			<SlickCardsSlider
				title={<TypeWhenInView text="Browser Extensions" once />}
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
		</div>
	);
};

export default BrowserExtensions;
