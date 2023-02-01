import { configureStore } from '@reduxjs/toolkit';
import CurrentWordSlice from './Slices/CurrentWordSlice';
import WordCategoriesSlice from './Slices/WordCategoriesSlice';

const store = configureStore({
	reducer: {
		CurrentWordSlice,
		WordCategoriesSlice,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
