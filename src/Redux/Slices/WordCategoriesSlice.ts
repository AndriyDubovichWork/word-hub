import { createSlice } from '@reduxjs/toolkit';
import wordCategoriesT from '../../types/wordCategoriesT';

const initialState: wordCategoriesT = {
	Categories: ['noun'],
	selected: 0,
};
const WordCategoriesSlice = createSlice({
	name: 'Word Categories Slice',
	initialState,
	reducers: {
		setSelectedWordCategory: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const { setSelectedWordCategory } = WordCategoriesSlice.actions;
export default WordCategoriesSlice.reducer;
