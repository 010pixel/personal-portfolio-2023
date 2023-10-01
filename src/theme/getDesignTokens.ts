import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		background: {
			default: '#f8f9fa',
		},
	},
});

export default getDesignTokens;
