import React, { useState } from 'react';
import Generateword from '../../api/WordGenerator';
import CustomButton from '../../Components/UI/CustomButton/CustomButton';
import { useAppDispatch } from '../../Redux/hooks';
import { setWord } from './Redux/CurrentWordSlice';
import GetWord from './GetWord/GetWord';

const GenerateWords = () => {
	const [isStarted, setIsStarted] = useState(false);

	const dispatch = useAppDispatch();

	return (
		<div>
			{!isStarted ? (
				<CustomButton
					onClick={() => {
						Generateword('noun').then((word: string) => {
							dispatch(setWord(word));
							setIsStarted(true);
						});
					}}
				>
					Start
				</CustomButton>
			) : (
				<GetWord />
			)}
		</div>
	);
};

export default GenerateWords;
