import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {
	setCouldNotDefine,
	setDefinition,
	setIsPending,
} from '../../../Redux/Slices/CurrentWordSlice';
import getAllDefinitionsOfWord from '../api/getAllDefinitions';
const useDefineWordData = () => {
	// * selectors
	const { definitions, word } = useAppSelector((state) => state.CurrentWordSlice.english);
	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);
	const missingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const dispatch = useAppDispatch();

	const getDefinition = () => {
		dispatch(setIsPending(true));

		getAllDefinitionsOfWord(word).then((definitions) => {
			dispatch(setIsPending(false));

			if (definitions.length === 0) {
				dispatch(setCouldNotDefine(true));
				return;
			}
			dispatch(setDefinition(definitions));
		});
	};

	return {
		definitions,
		getDefinition,
		isPending,
		CouldNotDefine: missingData.CouldNotDefine,
	};
};

export default useDefineWordData;
