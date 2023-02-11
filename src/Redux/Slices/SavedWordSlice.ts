import { createSlice } from '@reduxjs/toolkit';
import savedWordsT from '../../types/savedWordsT';
type initialStateT = {
	words: savedWordsT;
	wordToDelete: string;
	isSaved: boolean;

	dontAskAgain: boolean;
	showApproval: boolean;
};
const emptyWord = {
	english: {
		word: '',
		definitions: [''],
	},

	Translated: {
		word: '',
		definitions: [''],
	},
	selectedDefinition: 0,
};
const initialState: initialStateT = {
	words: [emptyWord],
	wordToDelete: '',
	isSaved: false,
	dontAskAgain: false,
	showApproval: false,
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
		setDontAskAgain: (state, action) => {
			state.dontAskAgain = action.payload;
		},

		setShowApproval: (state, action) => {
			state.showApproval = action.payload;
		},
		setWordToDelete: (state, action) => {
			state.wordToDelete = action.payload;
		},
	},
});

export const {
	setSavedWords,
	setIsWordSavedToDB,
	setDontAskAgain,
	setShowApproval,
	setWordToDelete,
} = SavedWordSlice.actions;

export default SavedWordSlice.reducer;
