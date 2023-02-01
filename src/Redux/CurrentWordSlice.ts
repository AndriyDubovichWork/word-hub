import { createSlice } from '@reduxjs/toolkit';
import missingDataT from '../types/missingDataT';
import wordT from '../types/wordT';
const deepcopy = require('deepcopy');
type initialStateT = {
	isStarted: boolean;
	isPending: boolean;
	missingData: missingDataT;
	english: wordT;
	Translated: wordT;
};

const initialState: initialStateT = {
	isStarted: false,
	isPending: false,
	missingData: {
		CouldNotDefine: false,
		CouldNotTranslate: false,
	},
	english: {
		word: '',
		definitions: [
			{
				definition: '',
				permalink: '',
				thumbs_up: 0,
				author: '',
				word: '',
				defid: 0,
				current_vote: '',
				written_on: '',
				example: '',
				thumbs_down: 0,
			},
		],
	},

	Translated: {
		word: '',
		definitions: [
			{
				definition: '',
				permalink: '',
				thumbs_up: 0,
				author: '',
				word: '',
				defid: 0,
				current_vote: '',
				written_on: '',
				example: '',
				thumbs_down: 0,
			},
		],
	},
};

export const CurrentWordSlice = createSlice({
	name: 'CurrentWordSlice',
	initialState,
	reducers: {
		setWord: (state, action) => {
			state.english.word = action.payload;
		},
		setDefinition: (state, action) => {
			state.english.definitions = action.payload;
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
		setDeffaultValues: () => {
			const StateCopy = deepcopy(initialState);
			StateCopy.isStarted = true;
			return StateCopy;
		},
	},
});

// ? Action creators are generated for each case reducer function
export const {
	setWord,
	setDefinition,
	setDeffaultValues,
	setTranslated,
	setMissingData,
	setIsPending,
	setIsStarted,
} = CurrentWordSlice.actions;

export default CurrentWordSlice.reducer;
