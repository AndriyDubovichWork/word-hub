import RemoveWordFromDB from '../../../../../dataBase/RemoveWordFromDB';
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import {
	setDontAskAgain,
	setSavedWords,
	setShowApproval,
} from '../../../../../Redux/Slices/SavedWordSlice';
import savedWordsT from '../../../../../types/savedWordsT';

const useApproveDeleteData = () => {
	const dispatch = useAppDispatch();
	const { dontAskAgain, words, wordToDelete } = useAppSelector((state) => state.SavedWordSlice);

	const HandleDontAskAgain = () => {
		dispatch(setDontAskAgain(dontAskAgain ? false : true));
	};

	const SaveWords = (words: savedWordsT) => dispatch(setSavedWords(words));

	const Approve = (customWord?: string) => {
		SaveWords(RemoveWordFromDB(words, customWord ? customWord : wordToDelete));
	};

	const setShowApprovalFunc = (approval: boolean) => dispatch(setShowApproval(approval));

	return {
		wordToDelete,
		HandleDontAskAgain,
		Approve,
		setShowApproval: setShowApprovalFunc,
	};
};
export default useApproveDeleteData;
