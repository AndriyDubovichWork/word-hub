import wordT from './wordT';

export type savedWordT = {
	english: wordT;
	Translated: wordT;
	selectedDefinition: number;
};

type savedWordsT = {
	english: wordT;
	Translated: wordT;
	selectedDefinition: number;
}[];
export default savedWordsT;
