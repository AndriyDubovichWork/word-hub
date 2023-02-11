import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import {
	setSavedWords,
	setShowApproval,
	setWordToDelete,
} from '../../../../../Redux/Slices/SavedWordSlice';
import savedWordsT from '../../../../../types/savedWordsT';
const useSavedWordsTableData = () => {
	const dispatch = useAppDispatch();

	const { showApproval, dontAskAgain } = useAppSelector((state) => state.SavedWordSlice);

	const setShowApprovalFunc = (approval: boolean) => dispatch(setShowApproval(approval));

	const words = useAppSelector((state) => state.SavedWordSlice.words);

	const SaveWords = (words: savedWordsT) => dispatch(setSavedWords(words));

	const setWordToDeleteFunc = (word: string) => dispatch(setWordToDelete(word));

	return {
		words,
		SaveWords,

		dontAskAgain,

		setWordToDelete: setWordToDeleteFunc,

		showApproval,
		setShowApproval: setShowApprovalFunc,
	};
};

export default useSavedWordsTableData;
