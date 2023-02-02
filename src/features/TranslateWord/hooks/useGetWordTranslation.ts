import getAllDefinitions from '../../../api/getAllDefinitions';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {
	setCouldNotDefine,
	setIsPending,
	setTranslatedDefinitions,
	setTranslatedWord,
} from '../../../Redux/Slices/CurrentWordSlice';
import getTranslation from '../api/getTranslation';
import createWordAndDefinitionArray from '../helpers/createWordAndDefinitionArray';

const useGetWordData = () => {
	// * selectors
	const { isPending } = useAppSelector((state) => state.CurrentWordSlice);
	const { word, definitions } = useAppSelector((state) => state.CurrentWordSlice.english);

	const { CouldNotDefine } = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const dispatch = useAppDispatch();
	const TranslateWord = () => {
		getTranslation(word).then((wordTranslation: string) => {
			dispatch(setTranslatedWord(wordTranslation));
			dispatch(setIsPending(false));
		});
	};
	const TranslateWordAndDefinition = (word: string, definitions: string[]) => {
		dispatch(setIsPending(true));

		getTranslation(createWordAndDefinitionArray(word, definitions)).then(
			(wordTranslation: string[]) => {
				const [word, ...definitions] = wordTranslation;
				dispatch(setTranslatedWord(word));

				dispatch(setTranslatedDefinitions(definitions));
				dispatch(setIsPending(false));
			}
		);
	};
	const TranslateHandling = () => {
		TranslateWord();
		if (CouldNotDefine) {
		} else {
			if (definitions[0]) {
				TranslateWordAndDefinition(word, definitions);
			} else {
				getAllDefinitions(word).then((definitions) => {
					if (definitions[0]) {
						TranslateWordAndDefinition(word, definitions);
					} else {
						dispatch(setCouldNotDefine(true));
						TranslateHandling();
					}
				});
			}
		}
	};

	return {
		isPending,
		TranslateHandling,
	};
};

export default useGetWordData;
