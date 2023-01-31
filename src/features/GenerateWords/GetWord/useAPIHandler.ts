import { setDefinition, setTranslated, setIsPending } from '../Redux/CurrentWordSlice';
import Translate from '../../../api/getTranslate';
import getDefinition from '../../../api/getDefinition';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';

const useAPIHandler = (DeffineErrorHandling: () => void, TranslateErrorHandling: () => void) => {
	const dispatch = useAppDispatch();

	const ControlIsPending = (value: boolean) => dispatch(setIsPending(value));

	const english = useAppSelector((state) => state.CurrentWordSlice.english);
	const MissingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	// ? request data
	const getWordDeffinition = () => {
		ControlIsPending(true);
		getDefinition(english.word, DeffineErrorHandling)
			.then((deffenition) => {
				ControlIsPending(false);
				if (!deffenition) {
					DeffineErrorHandling();
					return;
				}
				dispatch(setDefinition(deffenition));
			})
			.catch(() => {
				ControlIsPending(false);
				DeffineErrorHandling();
			});
	};
	const TranslateWord = () => {
		const randomDivider = '{random divider|}|';
		ControlIsPending(true);
		const translationText = MissingData.CouldNotDefine
			? english.word
			: `${english.word}${randomDivider}${!MissingData.CouldNotDefine ? english.definition : ''}`;

		if (!english.definition && !MissingData.CouldNotDefine) {
			getWordDeffinition();

			return;
		}

		Translate(translationText, TranslateErrorHandling).then((translated: string) => {
			ControlIsPending(false);
			// ! error handling
			if (!translated) {
				TranslateErrorHandling();

				return;
			}
			if (MissingData.CouldNotDefine) {
				dispatch(setTranslated({ word: translated, definition: '' }));
				return;
			}

			// basic handling
			const [translatedWord, translatedDeffinition] = translated.split(randomDivider);
			dispatch(
				setTranslated({
					word: translatedWord,
					definition: translatedDeffinition,
				})
			);
		});
	};
	return { TranslateWord, getWordDeffinition };
};

export default useAPIHandler;