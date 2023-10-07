import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function scrollToTargetAdjusted(targetElement: string) {
	const element = document.getElementById(targetElement) as any;
	const headerOffset = 10;
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
}

const menuItems = [
	{
		title: 'By the Numbers',
		slug: 'by-the-numbers',
	},
	{
		title: 'Tech Exposure',
		slug: 'tech-exposure',
	},
	{
		title: 'Browser Extensions',
		slug: 'browser-extensions',
	},
	{
		title: 'Blogging',
		slug: 'blogging',
	},
	{
		title: 'WordPress Plugins',
		slug: 'wordpress-plugins',
	},
	{
		title: 'About Me',
		slug: 'about-me',
	},
	{
		title: 'Project Areas',
		slug: 'project-areas',
	},
];

export default function DropdownMenu2() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const onMenuItemClick = (slug: string) => {
		scrollToTargetAdjusted(slug);
		handleClose();
	};

	return (
		<>
			<IconButton
				id="demo-positioned-button"
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				size="small"
				sx={{
					color: 'white',
				}}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				{menuItems.map((item) => (
					<MenuItem
						key={item.slug}
						onClick={() => onMenuItemClick(item.slug)}
						sx={{
							fontSize: '0.8rem',
						}}
					>
						{item.title}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}
