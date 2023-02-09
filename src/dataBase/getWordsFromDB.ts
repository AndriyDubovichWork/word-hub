import setWordsToDB from './setWordsToDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const getWordsFromDB = (): wordT[] => {
	// @ts-ignore
	let words: wordT[] = JSON.parse(localStorage.getItem('words')).words;

	localStorage.removeItem('words');
	if (!words) {
		words = wordsMock.words;
	}
	if (!words[0].english.word && words.length > 1) {
		words.shift();
		setWordsToDB({ words });
		getWordsFromDB();
	}

	return words;
};

export default getWordsFromDB;
