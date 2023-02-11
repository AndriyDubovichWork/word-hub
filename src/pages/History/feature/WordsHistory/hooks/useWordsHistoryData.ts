import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import { setDeffaultValues, setWord } from '../../../../../Redux/Slices/CurrentWordSlice';
import { setIsWordSavedToDB } from '../../../../../Redux/Slices/SavedWordSlice';
import { RemoveWordFromHistory } from '../../../../../Redux/Slices/WordsHistorySlice';

const useWordsHistoryData = () => {
	const dispatch = useAppDispatch();

	const wordsHistory = useAppSelector((state) => state.WordsHistorySlice.words);

	const RemoveWordFromHistoryFunc = (word: string) => dispatch(RemoveWordFromHistory(word));

	const ReturnToWordFromHistory = (word: string) => {
		dispatch(setIsWordSavedToDB(false));
		dispatch(setDeffaultValues());
		dispatch(setWord(word));
	};

	return {
		wordsHistory,
		RemoveWordFromHistory: RemoveWordFromHistoryFunc,
		ReturnToWordFromHistory,
	};
};

export default useWordsHistoryData;
