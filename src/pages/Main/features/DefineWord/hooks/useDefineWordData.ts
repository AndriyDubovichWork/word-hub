import getAllDefinitionsOfWord from '../../../../../api/getAllDefinitions';
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import {
	setCouldNotDefine,
	setDefinitions,
	setIsPending,
	setShowMore,
} from '../../../../../Redux/Slices/CurrentWordSlice';
const useDefineWordData = () => {
	// * selectors
	const { definitions, word } = useAppSelector((state) => state.CurrentWordSlice.english);
	const { isPending, missingData, showMore } = useAppSelector((state) => state.CurrentWordSlice);

	const dispatch = useAppDispatch();

	const getDefinition = () => {
		dispatch(setIsPending(true));

		getAllDefinitionsOfWord(word).then((definitions) => {
			dispatch(setIsPending(false));

			if (definitions.length === 0) {
				dispatch(setCouldNotDefine(true));
				return;
			}
			dispatch(setDefinitions(definitions));
		});
	};
	const showMoreFunction = (showMore: boolean) => dispatch(setShowMore(showMore));
	return {
		definitions,
		getDefinition,
		isPending,
		showMore,
		setShowMore: showMoreFunction,
		CouldNotDefine: missingData.CouldNotDefine,
	};
};

export default useDefineWordData;
