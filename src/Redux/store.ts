import { configureStore } from '@reduxjs/toolkit';
import CurrentWordSlice from '../features/GenerateWords/Redux/CurrentWordSlice';
import GenerateWordSlice from '../features/GenerateWord/Redux/generateWordSlice';
const store = configureStore({
	reducer: {
		CurrentWordSlice,
		GenerateWordSlice,
	},
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
