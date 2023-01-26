import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
		// set wor and deffinition after getting information
		setWord: (state, action) => {
			state.english.word = action.payload;
		},
		setDefinition: (state, action) => {
			state.english.definition = action.payload;
		},

		setMissingData: (state, action) => {
			state.missingData = action.payload;
		},

		// set translation
		setTranslated: (state, action) => {
			state.Translated = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWord, setDefinition, setTranslated, setMissingData } = CurrentWordSlice.actions;

export default CurrentWordSlice.reducer;
