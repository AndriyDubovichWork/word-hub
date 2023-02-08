import getAllDefinitionsOfWord from '../../../../../api/getAllDefinitions';
import { useAppDispatch, useAppSelector } from '../../../../../Redux/hooks';
import {
	setCouldNotDefine,
	setDefinitions,
	setIsPending,
	setSelectedDefinition,
	setShowMore,
} from '../../../../../Redux/Slices/CurrentWordSlice';
import missingDataT from '../../../../../types/missingDataT';
const useDefineWordData = () => {
	// * selectors
	const { definitions, word } = useAppSelector((state) => state.CurrentWordSlice.english);
	const {
		isPending,
		missingData,
		showMore,
		selectedDefinition,
	}: {
		isPending: boolean;
		missingData: missingDataT;
		showMore: boolean;
		selectedDefinition: number;
	} = useAppSelector((state) => state.CurrentWordSlice);

	const dispatch = useAppDispatch();

	const setSelectedDefinitionFunction = (definitionID: number) =>
		dispatch(setSelectedDefinition(definitionID));

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
		setSelectedDefinition: setSelectedDefinitionFunction,
		CouldNotDefine: missingData.CouldNotDefine,
		selectedDefinition,
	};
};

export default useDefineWordData;
