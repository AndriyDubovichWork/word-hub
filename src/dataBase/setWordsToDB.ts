import { wordsT } from './types';

const setWordsToDB = (words: wordsT) => {
	localStorage.setItem('words', JSON.stringify(words));
	return words;
};

export default setWordsToDB;
