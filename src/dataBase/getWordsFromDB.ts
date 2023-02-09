import setWordsToDB from './setWordsToDB';
import RemoveWordFromDB from './RemoveWordFromDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const getWordsFromDB = (): wordT[] => {
	// @ts-ignore
	let words: wordT[] = JSON.parse(localStorage.getItem('words'))?.words;

	if (!words) {
		words = wordsMock.words;
	}
	words.map((word) => {
		if (!word.english.word && words.length > 1) {
			RemoveWordFromDB(words, word.english.word);
			// @ts-ignore
			words = getWordsFromDB();
		}
	});

	return words;
};

export default getWordsFromDB;
