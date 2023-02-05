import { createSlice } from '@reduxjs/toolkit';
import wordT from '../../types/wordT';
type initialStateT = {
	words: {
		english: wordT;
		Translated: wordT;
	}[];

	isSaved: boolean;
};

const initialState: initialStateT = {
	words: [
		{
			english: {
				word: '',
				definitions: [''],
			},

			Translated: {
				word: '',
				definitions: [''],
			},
		},
	],
	isSaved: false,
};

export const SavedWordSlice = createSlice({
	name: 'Saved Word Slice',
	initialState,
	reducers: {
		setSavedWords: (state, action) => {
			state.words = action.payload;
		},
		setIsWordSavedToDB: (state, action) => {
			state.isSaved = action.payload;
		},
	},
});

export const { setSavedWords, setIsWordSavedToDB } = SavedWordSlice.actions;

export default SavedWordSlice.reducer;
