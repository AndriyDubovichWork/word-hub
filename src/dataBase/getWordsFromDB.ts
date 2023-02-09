import setWordsToDB from './setWordsToDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const getWordsFromDB = (): wordT[] => {
	let words: wordT[] = wordsMock.words;
	try {
		// @ts-ignore
		words = JSON.parse(localStorage.getItem('words')).words;
	} catch (err) {}

	if (!words[0].english.word && words.length > 1) {
		words.shift();
		setWordsToDB({ words });
		words = JSON.parse(localStorage.getItem('words') || '').words;
	}

	return words;
};

export default getWordsFromDB;
