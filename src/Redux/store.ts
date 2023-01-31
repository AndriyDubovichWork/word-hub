import { configureStore } from '@reduxjs/toolkit';
// import CurrentWordSlice from '../features/GenerateWords/Redux/CurrentWordSlice';
import CurrentWordSlice from './CurrentWordSlice';
const store = configureStore({
	reducer: {
		CurrentWordSlice,
	},
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
