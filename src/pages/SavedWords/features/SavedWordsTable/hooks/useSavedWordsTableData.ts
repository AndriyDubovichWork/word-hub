import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import { setSavedWords } from '../../../../../Redux/Slices/SavedWordSlice';
import savedWordsT from '../../../../../types/savedWordsT';
const useSavedWordsTableData = () => {
	const dispatch = useAppDispatch();
	const words = useAppSelector((state) => state.SavedWordSlice.words);
	const SaveWords = (words: savedWordsT) => dispatch(setSavedWords(words));
	return { words, SaveWords };
};

export default useSavedWordsTableData;
