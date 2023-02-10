import { styled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import React from 'react';

const CustomMenuItem = styled(MenuItem)(() => ({
	color: '#ffffff',
	backgroundColor: '#1B1B1B',

	'&.Mui-selected': {
		color: '#f3ca20',
		backgroundColor: '#1B1B1B',
		'&:hover': {
			backgroundColor: '#2B2B2B',
		},
	},
	'&.Mui-disabled': {
		color: '#f3ca20',
		backgroundColor: '#1B1B1B',
	},
	'&:hover': {
		backgroundColor: '#2B2B2B',
	},
}));

export default CustomMenuItem;
