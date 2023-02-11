import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import {
	setDeffaultValues,
	setIsPending,
	setWord,
} from '../../../../../Redux/Slices/CurrentWordSlice';
import { setIsWordSavedToDB } from '../../../../../Redux/Slices/SavedWordSlice';
import { setSelectedWordCategory } from '../../../../../Redux/Slices/WordCategoriesSlice';
import { AddWordToHistory } from '../../../../../Redux/Slices/WordsHistorySlice';
import Generateword from '../api/getWord';

const useGetWordData = () => {
	// * selectors
	const word = useAppSelector((state) => state.CurrentWordSlice.english.word);

	const { isStarted, isPending } = useAppSelector((state) => state.CurrentWordSlice);
	const { Categories, selected } = useAppSelector((state) => state.WordCategoriesSlice);

	const dispatch = useAppDispatch();

	const generateWordHandling = () => {
		dispatch(setIsWordSavedToDB(false));
		dispatch(setDeffaultValues());

		dispatch(setIsPending(true));
		Generateword(selected).then((word: string) => {
			dispatch(setWord(word));

			dispatch(AddWordToHistory(word));

			dispatch(setIsPending(false));
		});
	};

	const HandleSelect = (selected: string) => {
		dispatch(setSelectedWordCategory(selected));
	};

	return {
		word,
		isPending,
		isStarted,
		Categories,
		selected,
		generateWordHandling,
		HandleSelect,
	};
};

export default useGetWordData;
