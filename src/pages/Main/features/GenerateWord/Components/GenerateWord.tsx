import { Box } from '@mui/material';
import Button from '../../../../../Components/UI/CustomButton/CustomButton';
import React from 'react';
import useGetWordData from '../hooks/useGetWordData';
const loadingImg = require('./../assets/loading.gif');
const GenerateWord = () => {
	const { word, isPending, isStarted, generateWordHandling } = useGetWordData();

	return (
		<Box margin='1vh auto' textAlign='center'>
			<h1>{word}</h1>
			{isPending && <img src={loadingImg} alt='loading' style={{ display: 'flex' }} />}

			{isStarted ? (
				<Button onClick={generateWordHandling} disabled={isPending} sx={{ width: '10vw' }}>
					Next
				</Button>
			) : (
				<Button
					onClick={generateWordHandling}
					disabled={isPending}
					sx={{
						width: '10vw',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					Start
				</Button>
			)}
		</Box>
	);
};

export default GenerateWord;
