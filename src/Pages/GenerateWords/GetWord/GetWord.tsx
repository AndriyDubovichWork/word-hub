import React from 'react';
import getDefinition from '../../../api/getDefinition';
import Translate from '../../../api/Translate';
import CustomButton from '../../../Components/UI/CustomButton/CustomButton';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import {
	setDefinition,
	setMissingData as setUnfoundData,
	setTranslated,
} from '../Redux/CurrentWordSlice';

const GetWord = () => {
	const english = useAppSelector((state) => state.CurrentWordSlice.english);

	const Translated = useAppSelector((state) => state.CurrentWordSlice.Translated);

	const dispatch = useAppDispatch();

	const MissingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const setMissingData = (data: typeof MissingData) => dispatch(setUnfoundData(data));
	// error handling

	const DeffineErrorHandling = () => {
		setMissingData({ ...MissingData, CouldNotDefine: true });
	};
	const TranslateErrorHandling = () => {
		setMissingData({ ...MissingData, CouldNotTranslate: true });
	};
	// api
	const getWordDeffinition = () => {
		getDefinition(english.word, DeffineErrorHandling).then((deffenition) => {
			if (deffenition) {
				dispatch(setDefinition(deffenition));
			} else {
				dispatch(setDefinition('Could not Define'));
				DeffineErrorHandling();
			}
		});
	};
	const TranslateWord = async () => {
		Translate(
			`${english.word}|${english.definition ? english.definition : ''}`,
			TranslateErrorHandling
		).then((translatedWordAndDeffinition: string) => {
			if (!translatedWordAndDeffinition) {
				TranslateErrorHandling();
				dispatch(
					setTranslated({
						word: 'Could not translate',
						deffinition: 'Could not translate',
					})
				);
				return;
			}
			console.log(translatedWordAndDeffinition);

			const [translatedWord, translatedDeffinition] = translatedWordAndDeffinition.split('|');

			dispatch(
				setTranslated({
					word: translatedWord.replace(/'/g, "'"),
					deffinition: translatedDeffinition.replace(/'/g, "'"),
				})
			);
		});
	};
	return (
		<>
			<h1>{english.word}</h1>
			<h1>{english.definition}</h1>

			{/* get deffinition by button click */}
			{/*hide button if no deffinition or could not define word  */}
			{!english.definition && !MissingData.CouldNotDefine && (
				<CustomButton
					onClick={() => {
						getWordDeffinition();
					}}
				>
					deffenition
				</CustomButton>
			)}
			<h1>{MissingData.CouldNotTranslate ? 'Could not translate a word' : Translated.word}</h1>
			{!Translated.word && !Translated.definition && !MissingData.CouldNotTranslate && (
				<CustomButton
					onClick={() => {
						//  if no word deffinition get it before translation
						if (english.definition) {
							TranslateWord();
						}
						if (!MissingData.CouldNotTranslate && !english.definition) {
							getWordDeffinition();
						}
					}}
				>
					translate
				</CustomButton>
			)}
		</>
	);
};

export default GetWord;
