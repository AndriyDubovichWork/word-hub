import { createSlice } from '@reduxjs/toolkit';
const deepcopy = require('deepcopy');
const initialState: { words: string[] } = {
	words: [''],
};
const WordsHistorySlice = createSlice({
	name: 'Words History Slice',
	initialState,
	reducers: {
		AddWordToHistory: (state, action) => {
			const words: string[] = deepcopy(state.words);
			words.unshift(action.payload);
			return { words };
		},
		RemoveWordFromHistory: (state, action) => {
			const words: string[] = deepcopy(state.words);

			const wordId = words.findIndex((word: string) => word === action.payload);

			words.splice(wordId, 1);

			return { words };
		},
	},
});

export const { AddWordToHistory, RemoveWordFromHistory } = WordsHistorySlice.actions;
export default WordsHistorySlice.reducer;
