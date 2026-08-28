
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Feature/counterSlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export default store;
