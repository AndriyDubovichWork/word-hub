import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {
	setCouldNotTranslate,
	setIsPending,
	setTranslatedWord,
} from '../../../Redux/Slices/CurrentWordSlice';
import getTranslation from '../api/getTranslation';

const useGetWordTranslation = () => {
	// * selectors
	const { isPending } = useAppSelector((state) => state.CurrentWordSlice);
	const { word } = useAppSelector((state) => state.CurrentWordSlice.english);
	const { CouldNotTranslate } = useAppSelector((state) => state.CurrentWordSlice.missingData);
	const TranslatedWord = useAppSelector((state) => state.CurrentWordSlice.Translated.word);

	const dispatch = useAppDispatch();
	const TranslateWord = () => {
		dispatch(setIsPending(true));
		getTranslation(word).then((wordTranslation: string) => {
			dispatch(setIsPending(false));

			if (!wordTranslation) {
				dispatch(setCouldNotTranslate(true));
			} else {
				dispatch(setTranslatedWord(wordTranslation));
			}
		});
	};

	const TranslateHandling = () => {
		TranslateWord();
	};

	return {
		isPending,
		TranslatedWord,
		CouldNotTranslate,
		TranslateHandling,
	};
};

export default useGetWordTranslation;
