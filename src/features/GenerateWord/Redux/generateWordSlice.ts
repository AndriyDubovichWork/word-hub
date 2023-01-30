import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	word: '',
	definition: '',
};

export const GenerateWordSlice = createSlice({
	name: 'word generator',
	initialState,
	reducers: {
		setWord: (state, action) => {
			state.word = action.payload;
		},
		setDefinition: (state, action) => {
			state.definition = action.payload;
		},
	},
});

export const { setWord, setDefinition } = GenerateWordSlice.actions;

export default GenerateWordSlice.reducer;
