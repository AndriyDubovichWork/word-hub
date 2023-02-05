import getWordsFromDB from './getWordsFromDB';
import setWordsToDB from './setWordsToDB';
import { wordT } from './types';

const PushWordToDB = (word: wordT) => {
	const words = getWordsFromDB();
	words.push(word);
	setWordsToDB({ words });
};

export default PushWordToDB;
