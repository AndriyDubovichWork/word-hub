import React, { useState } from 'react';
import Generateword from '../../api/getWordGenerator';
import CustomButton from '../../Components/UI/CustomButton/CustomButton';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setWord, setIsPending } from './Redux/CurrentWordSlice';
import GetWord from './GetWord/GetWord';

const GenerateWords = () => {
	const [isStarted, setIsStarted] = useState(false);

	const dispatch = useAppDispatch();

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	return (
		<div>
			{!isStarted ? (
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
					Start
				</CustomButton>
			) : (
				<GetWord />
			)}
		</div>
	);
};

export default GenerateWords;
