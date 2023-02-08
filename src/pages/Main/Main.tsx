import { Box } from '@mui/material';
import { useAppSelector } from '../../Redux/hooks';
import DefineWord from './features/DefineWord';
import GenerateWord from './features/GenerateWord';
import SaveWord from './features/SaveWord';
import TranslateWords from './features/TranslateWord';
import React from 'react';
const Main = () => {
	const isStarted = useAppSelector((state) => state.CurrentWordSlice.isStarted);
	return (
		<Box width='90vw' margin='0 auto' display='flex' flexDirection='column'>
			<GenerateWord />
			{isStarted && (
				<>
					<SaveWord />
					<TranslateWords />
					<DefineWord />
				</>
			)}
		</Box>
	);
};

export default Main;
