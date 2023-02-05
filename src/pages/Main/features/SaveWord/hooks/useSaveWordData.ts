import PushWordToDB from '../../../../../dataBase/PushWordToDB';
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import { setIsWordSavedToDB } from '../../../../../Redux/Slices/SavedWordSlice';

const useSaveWordData = () => {
	const dispatch = useAppDispatch();
	// * selectors
	const { isSaved } = useAppSelector((state) => state.SavedWordSlice);
	const { isPending } = useAppSelector((state) => state.CurrentWordSlice);
	const { english, Translated, selectedDefinition } = useAppSelector(
		(state) => state.CurrentWordSlice
	);

	const AddWord = () => {
		PushWordToDB({ english, Translated, selectedDefinition });
		dispatch(setIsWordSavedToDB(true));
	};
	return {
		isPending,
		isSaved,
		AddWord,
	};
};

export default useSaveWordData;
