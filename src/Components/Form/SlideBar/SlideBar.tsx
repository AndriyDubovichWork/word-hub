import React from 'react';
import { Box, Drawer } from '@mui/material';
import DrawerElement from './Drawer';

type SlideBarProps = {
	isOpen: boolean;
	handleOpen: () => void;
};

const SlideBar = ({ isOpen, handleOpen }: SlideBarProps) => {
	return (
		<Box
			sx={{
				flexShrink: { sm: 0 },
			}}
		>
			<Drawer
				open={isOpen}
				variant='temporary'
				anchor='left'
				onClose={handleOpen}
				sx={{
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						backgroundColor: '#000',
						color: '#fff',
					},
				}}
			>
				<DrawerElement />
			</Drawer>
		</Box>
	);
};
export default SlideBar;
