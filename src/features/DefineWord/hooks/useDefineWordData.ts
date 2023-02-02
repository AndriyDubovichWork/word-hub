import getAllDefinitionsOfWord from '../../../api/getAllDefinitions';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {
	setCouldNotDefine,
	setDefinitions,
	setIsPending,
} from '../../../Redux/Slices/CurrentWordSlice';
const useDefineWordData = () => {
	// * selectors
	const { definitions, word } = useAppSelector((state) => state.CurrentWordSlice.english);
	const { isPending, missingData } = useAppSelector((state) => state.CurrentWordSlice);

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

	return {
		definitions,
		getDefinition,
		isPending,
		CouldNotDefine: missingData.CouldNotDefine,
	};
};

export default useDefineWordData;
