import { configureStore } from '@reduxjs/toolkit';
import CurrentWordSlice from './Slices/CurrentWordSlice';
import SavedWordSlice from './Slices/SavedWordSlice';
import WordCategoriesSlice from './Slices/WordCategoriesSlice';

const store = configureStore({
	reducer: {
		SavedWordSlice,
		CurrentWordSlice,
		WordCategoriesSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
