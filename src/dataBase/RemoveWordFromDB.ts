const deepcopy = require('deepcopy');
import setWordsToDB from './setWordsToDB';
import { wordT } from './types';
import wordsMock from './wordsMock.json';
const RemoveWordFromDB = (Originalwords: wordT[], word: string) => {
	const words: wordT[] = deepcopy(Originalwords);
	const IdToRemove = words.findIndex((wordOBJ) => wordOBJ.english.word === word);
	console.log(IdToRemove);

	words.splice(IdToRemove, 1);
	if (words.length === 0) {
		setWordsToDB(wordsMock);
	} else {
		setWordsToDB({ words });
	}
	return words;
};

export default RemoveWordFromDB;
