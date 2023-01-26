import { configureStore } from '@reduxjs/toolkit';
import CurrentWordSlice from '../Pages/GenerateWords/Redux/CurrentWordSlice';
const store = configureStore({
	reducer: {
		CurrentWordSlice,
	},
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
