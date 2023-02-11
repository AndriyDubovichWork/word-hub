import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
const CustomButton = styled(LoadingButton)(() => ({
	color: '#fff',
	backgroundColor: '#1B1B1B',
	'&:hover': {
		backgroundColor: '#2B2B2B',
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
