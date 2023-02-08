import { wordsT } from './types';

const setWordsToDB = (words: wordsT) => {
	sessionStorage.setItem('words', JSON.stringify(words));
	return words;
};

export default setWordsToDB;
