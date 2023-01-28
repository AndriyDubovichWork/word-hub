import React from 'react';
import getDefinition from '../../../api/getDefinition';
import Translate from '../../../api/Translate';
import CustomButton from '../../../Components/UI/CustomButton/CustomButton';
import { setDefinition, setTranslated } from '../Redux/CurrentWordSlice';
import useErrorHandling from './useErrorHandling';
import useGetWordData from './useGetWordData';

const GetWord = () => {
	const { Translated, english, dispatch } = useGetWordData();
	// ! error handling
	const { DeffineErrorHandling, TranslateErrorHandling, MissingData } = useErrorHandling();
	// * api
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
			`${english.word}|${!MissingData.CouldNotDefine ? english.definition : ''}`,
			TranslateErrorHandling
		).then((translatedWordAndDeffinition: string) => {
			if (!translatedWordAndDeffinition) {
				TranslateErrorHandling();

				return;
			}

			const [translatedWord, translatedDeffinition] = translatedWordAndDeffinition.split('|');
			if (translatedWord && translatedDeffinition) {
				dispatch(
					setTranslated({
						word: translatedWord,
						definition: translatedDeffinition,
					})
				);
			}
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
			<h1>
				{MissingData.CouldNotTranslate
					? 'Could not translate a word'
					: Translated.word + ' ' + Translated.definition}
			</h1>
			{!Translated.word && !Translated.definition && !MissingData.CouldNotTranslate && (
				<CustomButton
					onClick={() => {
						// ?  if no word deffinition get it before translation
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
