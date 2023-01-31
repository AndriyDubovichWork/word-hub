import React from 'react';
import getDefinition from '../../../api/getDefinition';
import CustomButton from '../../../Components/UI/CustomButton/CustomButton';
import { setDefinition, setIsPending, setMissingData } from '../../../Redux/CurrentWordSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
const DefineWord = () => {
	const dispatch = useAppDispatch();

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	const CurrentlySelected = useAppSelector((state) => state.CurrentWordSlice.english);
	const MissingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const DeffineErrorHandling = () => {
		dispatch(setMissingData({ ...MissingData, CouldNotDefine: true }));
	};

	return (
		<>
			<CustomButton
				onClick={() => {
					dispatch(setIsPending(true));
					getDefinition(CurrentlySelected.word, DeffineErrorHandling).then((res) => {
						dispatch(setDefinition(res));
					});
				}}
				disabled={isPending}
			>
				Define Word
			</CustomButton>
			<h1>{CurrentlySelected.definition}</h1>
		</>
	);
};

export default DefineWord;
