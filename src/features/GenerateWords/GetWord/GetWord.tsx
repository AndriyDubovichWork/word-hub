import React from 'react';
import CustomButton from '../../../Components/UI/CustomButton/CustomButton';
import useAPIHandler from './useAPIHandler';
import useErrorHandling from './useErrorHandling';
import useGetWordData from './useGetWordData';

const GetWord = () => {
	const { Translated, english, isPending } = useGetWordData();
	// ! error handling
	const { DeffineErrorHandling, TranslateErrorHandling, MissingData } = useErrorHandling();
	// * api
	const { TranslateWord, getWordDeffinition } = useAPIHandler(
		DeffineErrorHandling,
		TranslateErrorHandling
	);
	return (
		<>
			<h1>{english.word}</h1>
			{/* if no definition show could not define */}
			<h1>{!MissingData.CouldNotDefine ? english.definition : 'Could Not Define'}</h1>

			{/* show button if no deffinition and could not define word  */}
			{!english.definition && !MissingData.CouldNotDefine && (
				<CustomButton
					onClick={() => {
						getWordDeffinition();
					}}
					disabled={isPending}
				>
					deffenition
				</CustomButton>
			)}
			<h1>
				{!Translated.word && MissingData.CouldNotTranslate
					? 'Could not translate word'
					: Translated.word}
			</h1>
			{/* if no deffinition show placeholder text */}
			<h1>{!Translated.definition && MissingData.CouldNotDefine ? '' : Translated.definition}</h1>

			{!Translated.word && !Translated.definition && !MissingData.CouldNotTranslate && (
				<CustomButton
					disabled={isPending}
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
