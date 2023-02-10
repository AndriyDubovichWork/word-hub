import { styled } from '@mui/material/styles';
import React from 'react';
import { InputBase } from '@mui/material';
const CustomInput = styled(InputBase)(() => ({
	'&.MuiInputBase-root': {
		color: '#fff',
		backgroundColor: '#1B1B1B',

		borderRadius: 5,
		'&:hover': {
			backgroundColor: '#2B2B2B',
		},
		'&:disabled': {
			backgroundColor: '#333',
			color: '#f3ca20',
		},
	},
	'&.MuiInputBase-input': {
		color: '#fff',
		'&:disabled': {
			color: '#f3ca20',
		},
	},
	'&.Mui-disabled': {
		backgroundColor: '#333',
		color: '#f3ca20',
	},
}));

export default CustomInput;
