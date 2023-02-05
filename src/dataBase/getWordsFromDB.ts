import setWordsToDB from './setWordsToDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const getWordsFromDB = (): wordT[] => {
	let words = localStorage.getItem('words');
	if (!words) {
		setWordsToDB(wordsMock);
		words = localStorage.getItem('words');
	}

	return JSON.parse(words || '').words;
};

export default getWordsFromDB;
