import { configureStore } from '@reduxjs/toolkit';
import CurrentWordSlice from './Slices/CurrentWordSlice';
import SavedWordSlice from './Slices/SavedWordSlice';
import WordCategoriesSlice from './Slices/WordCategoriesSlice';
import WordsHistorySlice from './Slices/WordsHistorySlice';

const store = configureStore({
	reducer: {
		SavedWordSlice,
		CurrentWordSlice,
		WordCategoriesSlice,
		WordsHistorySlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
