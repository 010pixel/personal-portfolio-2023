import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactFCC } from '../../interface/react';
import CardsSlider from '../CardsSlider/CardsSlider';
import exntensions, { BrowserExtension, ExtensionLink } from '../../shared/data';

interface BrowserExtensionsProps {}

const BrowserExtensions: ReactFCC<BrowserExtensionsProps> = () => {
	return (
		<div data-testid="browser-extensions-component">
			<CardsSlider
				title="Browser Extensions"
				items={exntensions
					.filter((extension: BrowserExtension) => extension.showOnHome !== false)
					.map((extension: BrowserExtension) => {
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
			/>
		</div>
	);
};

export default BrowserExtensions;
