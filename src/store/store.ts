import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './reducers/counterSlice.ts';
import {todosApi} from "../services/todos-service.ts";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;