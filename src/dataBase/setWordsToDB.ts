import { wordsT } from './types';

const setWordsToDB = (words: wordsT) => {
	sessionStorageorage.setItem('words', JSON.stringify(words));
	return words;
};

export default setWordsToDB;
