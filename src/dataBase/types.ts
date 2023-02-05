export type wordT = {
	selectedDefinition: number;
	english: {
		word: string;
		definitions: string[];
	};

	Translated: {
		word: string;
		definitions: string[];
	};
};

export type wordsT = {
	words: wordT[];
};
