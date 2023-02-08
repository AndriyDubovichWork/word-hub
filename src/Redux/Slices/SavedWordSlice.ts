import { createSlice } from '@reduxjs/toolkit';
import savedWordsT from '../../types/savedWordsT';
type initialStateT = {
	words: savedWordsT;

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
			selectedDefinition: 0,
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
