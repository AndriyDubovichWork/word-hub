import { createSlice } from '@reduxjs/toolkit';
import missingDataT from '../../types/missingDataT';
import wordT from '../../types/wordT';
const deepcopy = require('deepcopy');
type initialStateT = {
	isStarted: boolean;
	isPending: boolean;
	selectedDefinition: number;
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
	selectedDefinition: 0,
	english: {
		word: '',
		definitions: [''],
	},

	Translated: {
		word: '',
		definitions: [''],
	},
};

export const CurrentWordSlice = createSlice({
	name: 'Current Word Slice',
	initialState,
	reducers: {
		setWord: (state, action) => {
			state.english.word = action.payload;
		},
		setDefinitions: (state, action) => {
			state.english.definitions = action.payload;
		},
		setSelectedDefinition: (state, action) => {
			state.selectedDefinition = action.payload;
		},

		setCouldNotDefine: (state, action) => {
			state.missingData.CouldNotDefine = action.payload;
		},
		setCouldNotTranslate: (state, action) => {
			state.missingData.CouldNotTranslate = action.payload;
		},
		setTranslatedWord: (state, action) => {
			state.Translated.word = action.payload;
		},
		setTranslatedDefinitions: (state, action) => {
			state.Translated.definitions = action.payload;
		},

		setIsPending: (state, action) => {
			state.isPending = action.payload;
		},

		setDeffaultValues: () => {
			const StateCopy = deepcopy(initialState);
			StateCopy.isStarted = true;
			return StateCopy;
		},
	},
});

export const {
	setWord,
	setDefinitions,
	setDeffaultValues,
	setSelectedDefinition,
	setTranslatedWord,
	setTranslatedDefinitions,
	setCouldNotDefine,
	setCouldNotTranslate,
	setIsPending,
} = CurrentWordSlice.actions;

export default CurrentWordSlice.reducer;
