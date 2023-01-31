import React, { useState } from 'react';
import Generateword from '../../../api/getWordGenerator';
import CustomButton from '../../../Components/UI/CustomButton/CustomButton';
import { setWord, setIsPending } from '../../../Redux/CurrentWordSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
const GenerateWord = () => {
	const [isStarted, setIsStarted] = useState(false);

	const dispatch = useAppDispatch();

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	const CurrentlySelected = useAppSelector((state) => state.CurrentWordSlice.english);
	return (
		<>
			<CustomButton
				onClick={() => {
					dispatch(setIsPending(true));
					Generateword('noun').then((word: string) => {
						dispatch(setWord(word));
						dispatch(setIsPending(false));
						setIsStarted(true);
					});
				}}
				disabled={isPending}
			>
				{isStarted ? 'Next' : 'Start'}
			</CustomButton>
			{isStarted ? <h1>{CurrentlySelected.word}</h1> : ''}
		</>
	);
};

export default GenerateWord;
