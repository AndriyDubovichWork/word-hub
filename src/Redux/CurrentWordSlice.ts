import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isStarted: false,
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

		setIsStarted: (state, action) => {
			state.isStarted = action.payload;
		},
	},
});

// ? Action creators are generated for each case reducer function
export const { setWord, setDefinition, setTranslated, setMissingData, setIsPending, setIsStarted } =
	CurrentWordSlice.actions;

export default CurrentWordSlice.reducer;
