import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
const CustomButton = styled(LoadingButton)(() => ({
	color: '#fff',
	backgroundColor: '#1B1B1B',
	'&:hover': {
		color: '#000',
		backgroundColor: '#e8ca51',
	},
	'&:active': {
		color: '#000',
		backgroundColor: '#E5AC00',
	},
	'&:disabled': {
		backgroundColor: '#333',
		color: '#f3ca20',
	},
}));

export default CustomButton;
