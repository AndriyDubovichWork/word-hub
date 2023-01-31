import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isPending: false,
	missingData: {
		CouldNotDefine: false,
		CouldNotTranslate: false,
	},
	english: {
		word: '',
		definition: '',
	},
	Translated: {
		word: '',
		definition: '',
	},
};

export const CurrentWordSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// ? set wor and deffinition after getting information
		setWord: (state, action) => {
			state.english.word = action.payload;
		},
		setDefinition: (state, action) => {
			state.english.definition = action.payload;
		},

		setMissingData: (state, action) => {
			state.missingData = action.payload;
		},

		setTranslated: (state, action) => {
			state.Translated = action.payload;
		},

		setIsPending: (state, action) => {
			state.isPending = action.payload;
		},
	},
});

// ? Action creators are generated for each case reducer function
export const { setWord, setDefinition, setTranslated, setMissingData, setIsPending } =
	CurrentWordSlice.actions;

export default CurrentWordSlice.reducer;
