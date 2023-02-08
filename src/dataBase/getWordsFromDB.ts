import setWordsToDB from './setWordsToDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const getWordsFromDB = (): wordT[] => {
	let words: wordT[] = JSON.parse(localStorage.getItem('words') || '').words;
	if (!words) {
		setWordsToDB(wordsMock);
		return wordsMock.words;
	}
	if (!words[0].english.word && words.length > 1) {
		words.shift();
		setWordsToDB({ words });
		words = JSON.parse(localStorage.getItem('words') || '').words;
	}

	return words;
};

export default getWordsFromDB;
